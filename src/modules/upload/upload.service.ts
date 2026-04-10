import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
  constructor(private configService: ConfigService) {
    // Ensure upload directories exist
    this.ensureUploadDirectories();
  }

  private ensureUploadDirectories() {
    const directories = ['./uploads/images', './uploads/documents'];
    directories.forEach((dir) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  /**
   * Process uploaded file and return public URL
   */
  processUpload(file: Express.Multer.File): { url: string; filename: string; size: number } {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    // Validate file type
    this.validateFile(file);

    // Generate public URL
    const baseUrl = this.configService.get('BASE_URL') || 'http://localhost:4000';
    const publicUrl = `${baseUrl}/uploads/${this.getFileFolder(file)}/${file.filename}`;

    return {
      url: publicUrl,
      filename: file.originalname,
      size: file.size,
    };
  }

  /**
   * Validate file type and size
   */
  private validateFile(file: Express.Multer.File) {
    // Image validation
    if (file.mimetype.startsWith('image/')) {
      const maxImageSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxImageSize) {
        this.deleteFile(file.path);
        throw new BadRequestException('Image file size must be less than 5MB');
      }

      const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedImageTypes.includes(file.mimetype)) {
        this.deleteFile(file.path);
        throw new BadRequestException('Only JPEG, PNG, GIF, and WebP images are allowed');
      }
    }

    // General file size validation
    const maxFileSize = 10 * 1024 * 1024; // 10MB
    if (file.size > maxFileSize) {
      this.deleteFile(file.path);
      throw new BadRequestException('File size must be less than 10MB');
    }
  }

  /**
   * Get folder name based on file type
   */
  private getFileFolder(file: Express.Multer.File): string {
    return file.mimetype.startsWith('image/') ? 'images' : 'documents';
  }

  /**
   * Delete a file
   */
  deleteFile(filePath: string) {
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  }

  /**
   * Delete file by URL
   */
  deleteFileByUrl(url: string) {
    try {
      // Extract filename from URL
      const urlParts = url.split('/');
      const filename = urlParts[urlParts.length - 1];
      const folder = urlParts[urlParts.length - 2];

      const filePath = path.join('./uploads', folder, filename);
      this.deleteFile(filePath);
    } catch (error) {
      console.error('Error deleting file by URL:', error);
    }
  }
}
