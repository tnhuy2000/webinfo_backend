import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
export declare class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any>;
    private handleGraphQL;
    private handleHttp;
    showLogAction(actionType: string, functionName: string, now: number): void;
    showLogSuccess(actionType: string, functionName: string, now: number): void;
    showLogError(error: any): void;
}
