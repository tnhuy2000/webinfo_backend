import { ConfigService } from '@nestjs/config';
export declare class UploadService {
    private configService;
    constructor(configService: ConfigService);
    private ensureUploadDirectories;
    processUpload(file: Express.Multer.File): {
        url: string;
        filename: string;
        size: number;
    };
    private validateFile;
    private getFileFolder;
    deleteFile(filePath: string): void;
    deleteFileByUrl(url: string): void;
}
