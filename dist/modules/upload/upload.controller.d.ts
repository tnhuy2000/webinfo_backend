import { UploadService } from './upload.service';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
export declare class UploadController {
    private readonly uploadService;
    private readonly cloudinaryService;
    constructor(uploadService: UploadService, cloudinaryService: CloudinaryService);
    uploadFile(file: Express.Multer.File): Promise<{
        success: boolean;
        message: string;
        url: any;
        public_id: any;
        originalname: string;
        mimetype: string;
        size: number;
    }>;
    uploadImage(file: Express.Multer.File): Promise<{
        message: string;
        url: any;
        public_id: any;
    }>;
    uploadDocument(file: Express.Multer.File): {
        url: string;
        filename: string;
        size: number;
    };
}
