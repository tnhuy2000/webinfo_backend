# ===== Stage 1: Build =====
FROM node:20-alpine AS builder

# Thư mục làm việc
WORKDIR /app

# Copy package files trước để tận dụng cache
COPY package*.json ./

# Nếu dùng yarn:
# COPY package.json yarn.lock ./

# Cài dependencies
RUN npm install

# Copy toàn bộ source code
COPY . .

# Build NestJS
RUN npm run build

# ===== Stage 2: Production =====
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Chỉ cài production dependencies
RUN npm install --only=production

# Copy file build từ stage builder
COPY --from=builder /app/dist ./dist

# Nếu có thư mục uploads/public thì copy thêm
# COPY --from=builder /app/uploads ./uploads

# Port mặc định NestJS
EXPOSE 3000

# Chạy production
CMD ["node", "dist/main"]