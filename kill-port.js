const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Read PORT from .env file
const envPath = path.join(__dirname, '.env');
let PORT = 3005; // Default

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  const portMatch = envContent.match(/^PORT=(\d+)/m);
  if (portMatch) {
    PORT = portMatch[1];
  }
}

console.log(`Checking port ${PORT}...`);

// Helper function to get PIDs using the port
function getPidsUsingPort(port) {
  try {
    const output = execSync(`cmd /c "netstat -ano | findstr :${port}"`, { encoding: 'utf8' });
    const lines = output.split('\n').filter(line => line.trim());
    const pids = new Set();

    lines.forEach(line => {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && pid !== '0' && /^\d+$/.test(pid)) {
        pids.add(pid);
      }
    });

    return pids;
  } catch {
    return new Set();
  }
}

// Helper function to kill a PID
function killPid(pid) {
  try {
    execSync(`cmd /c "taskkill /PID ${pid} /F /T"`, { encoding: 'utf8' });
    return true;
  } catch {
    try {
      execSync(`cmd /c "taskkill /PID ${pid} /F"`, { encoding: 'utf8' });
      return true;
    } catch {
      return false;
    }
  }
}

let pids = getPidsUsingPort(PORT);

if (pids.size > 0) {
  console.log(`Found ${pids.size} process(es) using port ${PORT}`);

  // First pass: Kill all processes
  pids.forEach(pid => {
    console.log(`Killing process tree for PID ${pid}...`);
    if (killPid(pid)) {
      console.log(`  ✓ Successfully killed PID ${pid}`);
    } else {
      console.log(`  ✗ Failed to kill PID ${pid}`);
    }
  });

  // Wait and verify with retry loop
  console.log('Waiting for processes to terminate completely...');
  let maxRetries = 15;
  let retryCount = 0;
  let portFree = false;

  while (retryCount < maxRetries && !portFree) {
    execSync('ping 127.0.0.1 -n 2 > nul', { stdio: 'pipe' }); // 1 second delay (Windows compatible)

    pids = getPidsUsingPort(PORT);

    if (pids.size > 0) {
      console.log(`Retry ${retryCount + 1}/${maxRetries}: Found ${pids.size} process(es) still using port, killing...`);

      pids.forEach(pid => {
        if (killPid(pid)) {
          console.log(`    ✓ Killed PID ${pid}`);
        } else {
          console.log(`    ✗ Could not kill PID ${pid}`);
        }
      });
      retryCount++;
    } else {
      portFree = true;
    }
  }

  if (portFree) {
    console.log(`✓ Port ${PORT} is now free`);
  } else {
    console.log(`✗ ERROR: Could not free port ${PORT} after ${maxRetries} retries`);
    console.log('  Remaining processes:', Array.from(pids).join(', '));
    console.log('  Try manually killing these processes or restarting your system.');
    process.exit(1);
  }
} else {
  console.log(`✓ Port ${PORT} is already free`);
}
