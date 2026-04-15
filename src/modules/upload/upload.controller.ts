import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  UseGuards,
  UploadedFiles,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Controller('upload')
export class UploadController {
  constructor(
    private readonly uploadService: UploadService,
    private readonly cloudinaryService: CloudinaryService
  ) {}

  /**
   * Upload a single file (image or document)
   * POST /upload
   */
  @Post()
  @UseGuards(JwtAuthGuard) // Require authentication
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }
    console.log('file', file)
    // return this.uploadService.processUpload(file);
    const result = await this.cloudinaryService.uploadFile(file, 'documents');
    
    return {
      success: true,
      message: 'Upload sucessfully',
      url: result.secure_url,
      public_id: result.public_id,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
    };
  }

  /**
   * Upload image specifically
   * POST /upload/image
   */
  @Post('image')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    if (!file.mimetype.startsWith('image/')) {
      throw new BadRequestException('Only image files are allowed');
    }

    //return this.uploadService.processUpload(file);
    const result = await this.cloudinaryService.uploadFile(file, 'products');
    
    return {
      message: 'Upload sucessfully',
      url: result.secure_url,           // Link ảnh (dùng cái này)
      public_id: result.public_id,      // Dùng để xóa sau này
    };
  }

  /**
   * Upload document specifically
   * POST /upload/document
   */
  @Post('document')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  uploadDocument(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    return this.uploadService.processUpload(file);
  }
}
