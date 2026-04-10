# Migration Guide: Base64 to File Upload

Nếu bạn đã có settings với base64 images/files và muốn chuyển sang file storage.

## Tình huống

**Before (Base64):**
```json
{
  "key": "SITE_LOGO",
  "type": "STRING",
  "value": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."
}
```

**After (File URL):**
```json
{
  "key": "SITE_LOGO",
  "type": "IMAGE",
  "value": "http://localhost:4001/uploads/images/logo-123.png"
}
```

## Migration Steps

### Option 1: Manual Migration (Recommended)

1. Backup existing database
2. For each setting with base64 image/file:
   - Download/save the base64 as file
   - Upload via admin UI
   - Update setting with new URL

### Option 2: Automatic Migration Script

Create a migration script:

```typescript
// scripts/migrate-base64-to-files.ts
import { MongoClient } from 'mongodb';
import * as fs from 'fs';
import * as path from 'path';

async function migrateBase64ToFiles() {
  const client = await MongoClient.connect('mongodb://localhost:27017');
  const db = client.db('webinfo');
  const settings = db.collection('settings');

  const base64Settings = await settings.find({
    value: { $regex: /^data:/ }
  }).toArray();

  for (const setting of base64Settings) {
    try {
      // Extract base64 data
      const matches = setting.value.match(/^data:(.+);base64,(.+)$/);
      if (!matches) continue;

      const [, mimeType, base64Data] = matches;
      const buffer = Buffer.from(base64Data, 'base64');

      // Determine file extension
      const ext = mimeType.split('/')[1] || 'bin';
      const isImage = mimeType.startsWith('image/');
      const folder = isImage ? 'images' : 'documents';

      // Generate filename
      const filename = `migrated-${setting.key.toLowerCase()}-${Date.now()}.${ext}`;
      const filePath = path.join('./uploads', folder, filename);

      // Ensure directory exists
      fs.mkdirSync(path.dirname(filePath), { recursive: true });

      // Write file
      fs.writeFileSync(filePath, buffer);

      // Update database
      const newType = isImage ? 'IMAGE' : 'FILE';
      const newValue = `http://localhost:4001/uploads/${folder}/${filename}`;

      await settings.updateOne(
        { _id: setting._id },
        {
          $set: {
            type: newType,
            value: newValue
          }
        }
      );

      console.log(`✅ Migrated ${setting.key}`);
    } catch (error) {
      console.error(`❌ Failed to migrate ${setting.key}:`, error);
    }
  }

  await client.close();
  console.log('Migration completed!');
}

migrateBase64ToFiles();
```

Run migration:
```bash
npx ts-node scripts/migrate-base64-to-files.ts
```

### Option 3: Keep Both (Backward Compatible)

Update frontend to handle both formats:

```typescript
// Display logic
const getImageUrl = (value: string) => {
  if (value.startsWith('data:')) {
    // Base64
    return value;
  }
  // URL
  return value;
};

// In render:
<Image src={getImageUrl(record.value)} />
```

## Testing Migration

1. Test with a few settings first
2. Verify files are created in uploads/
3. Verify URLs work (can access via browser)
4. Verify frontend displays correctly
5. Full migration

## Rollback Plan

If migration fails:
1. Restore database from backup
2. Delete migrated files: `rm -rf uploads/images/* uploads/documents/*`
3. Fix issues and retry

## Post-Migration

- Clean up old base64 data if needed
- Monitor disk space usage
- Consider moving to cloud storage (S3, etc.)
