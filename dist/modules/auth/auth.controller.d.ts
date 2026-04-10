import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<import("./auth.service").AuthResponse>;
    login(loginDto: LoginDto): Promise<import("./auth.service").AuthResponse>;
    refresh(refreshTokenDto: RefreshTokenDto, req: any): Promise<import("./auth.service").AuthTokens>;
    logout(req: any): Promise<{
        message: string;
    }>;
}
