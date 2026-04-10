# Upload Module

Module xử lý upload file và hình ảnh cho hệ thống.

## Features

- ✅ Upload hình ảnh (JPEG, PNG, GIF, WebP)
- ✅ Upload documents và file khác
- ✅ Validation file type và size
- ✅ Tự động phân loại file vào folders (images/documents)
- ✅ Tạo unique filename để tránh conflict
- ✅ Require JWT authentication
- ✅ Serve static files qua HTTP

## API Endpoints

### 1. Upload File (Tổng quát)
```http
POST /upload
Authorization: Bearer {token}
Content-Type: multipart/form-data

Body:
- file: File to upload
```

**Response:**
```json
{
  "url": "http://localhost:4001/uploads/images/file-1234567890-123456789.jpg",
  "filename": "original-filename.jpg",
  "size": 123456
}
```

### 2. Upload Image (Chỉ ảnh)
```http
POST /upload/image
Authorization: Bearer {token}
Content-Type: multipart/form-data

Body:
- file: Image file
```

### 3. Upload Document
```http
POST /upload/document
Authorization: Bearer {token}
Content-Type: multipart/form-data

Body:
- file: Document file
```

## File Storage

Files được lưu trong thư mục `./uploads/`:

```
uploads/
├── images/          # Hình ảnh (jpg, png, gif, webp)
│   └── file-1234567890-123456789.jpg
└── documents/       # Documents và file khác
    └── file-1234567890-123456789.pdf
```

## File Limits

- **Images**: Max 5MB
  - Allowed types: JPEG, PNG, GIF, WebP
- **Documents**: Max 10MB
  - All file types

## Security

- ✅ JWT Authentication required
- ✅ File type validation
- ✅ File size limits
- ✅ Unique filename generation
- ⚠️ **Note**: Hiện tại chưa có virus scanning

## Configuration

### Environment Variables

```env
# .env
BASE_URL=http://localhost:4001  # Used to generate file URLs
```

### Module Configuration

Edit `upload.module.ts` to change:
- Storage destination
- File size limits
- Filename pattern

## Usage Examples

### Frontend (JavaScript/TypeScript)

```typescript
const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('http://localhost:4001/upload', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });

  const data = await response.json();
  return data.url; // Use this URL to save to database
};
```

### cURL

```bash
curl -X POST http://localhost:4001/upload \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "file=@/path/to/image.jpg"
```

## Integration with Settings Module

Settings module sử dụng upload endpoint để lưu IMAGE và FILE type:

```typescript
// Settings with IMAGE type
{
  key: "SITE_LOGO",
  type: "IMAGE",
  value: "http://localhost:4001/uploads/images/file-123.jpg"
}

// Settings with FILE type
{
  key: "TERMS_PDF",
  type: "FILE",
  value: "http://localhost:4001/uploads/documents/file-456.pdf"
}
```

## Future Enhancements

- [ ] Cloud storage integration (AWS S3, Google Cloud Storage)
- [ ] Image resizing/optimization
- [ ] Virus scanning
- [ ] CDN integration
- [ ] File deletion API
- [ ] Bulk upload support
