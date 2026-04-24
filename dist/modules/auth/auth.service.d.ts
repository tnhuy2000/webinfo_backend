import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
export interface AuthTokens {
    accessToken: string;
    refreshToken: string;
}
export interface AuthResponse extends AuthTokens {
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    };
}
export declare class AuthService {
    private usersService;
    private jwtService;
    private configService;
    constructor(usersService: UsersService, jwtService: JwtService, configService: ConfigService);
    register(registerDto: RegisterDto): Promise<AuthResponse>;
    login(loginDto: LoginDto): Promise<AuthResponse>;
    refreshTokens(refreshToken: string): Promise<AuthTokens>;
    logout(userId: string): Promise<void>;
    private generateTokens;
}
