import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(email: string, password: string, name: string): Promise<UserDocument>;
    findByEmail(email: string): Promise<UserDocument | null>;
    findById(id: string): Promise<UserDocument | null>;
    findAll(): Promise<UserDocument[]>;
    updateRefreshToken(userId: string, refreshToken: string | null): Promise<void>;
    validateRefreshToken(userId: string, refreshToken: string): Promise<boolean>;
    update(id: string, updateData: Partial<User>): Promise<UserDocument | null>;
    delete(id: string): Promise<void>;
}
