import { UsersService } from './users.service';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<import("./schemas/user.schema").UserDocument[]>;
    getUser(id: string): Promise<import("./schemas/user.schema").UserDocument | null>;
    getMe(context: any): Promise<any>;
    createUser(input: any): Promise<any>;
    updateUser(id: string, input: any): Promise<import("./schemas/user.schema").UserDocument | null>;
    deleteUser(id: string): Promise<boolean>;
}
