/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const contextType = context.getType<'http' | 'graphql'>();

    if (contextType === 'graphql') {
      return this.handleGraphQL(context, next, now);
    }

    if (contextType === 'http') {
      return this.handleHttp(context, next, now);
    }

    return next.handle();
  }

  private handleGraphQL(context: ExecutionContext, next: CallHandler, now: number): Observable<any> {
    const gqlCtx = GqlExecutionContext.create(context);
    const info = gqlCtx.getInfo();

    const actionType = info?.parentType?.name || 'GraphQL';
    const functionName = info?.fieldName || 'unknown';

    this.showLogAction(actionType, functionName, now);

    return next.handle().pipe(
      tap({ error: (err) => this.showLogError(err) })
    );
  }

  private handleHttp(context: ExecutionContext, next: CallHandler, now: number): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const { method, url } = req;

    this.showLogAction(`HTTP ${method}`, url, now);

    return next.handle().pipe(
      tap({
        next: () => this.showLogSuccess(`HTTP ${method}`, url, now),
        error: (err: any) => this.showLogError(err),
      })
    );
  }

  public showLogAction(actionType: string, functionName: string, now: number) {
    console.log(
      '🚀',
      `\x1b[32m[${actionType}]\x1b[0m`,
      '»',
      functionName,
      `\x1b[33m[+${Date.now() - now}ms]\x1b[0m`,
      new Date().toLocaleString(),
      '👌',
    );
  }

  public showLogSuccess(actionType: string, functionName: string, now: number) {
    console.log(
      '✅',
      `\x1b[32m[${actionType}]\x1b[0m`,
      '»',
      functionName,
      `\x1b[33m[+${Date.now() - now}ms]\x1b[0m`,
    );
  }

  public showLogError(error: any) {
    console.error(
      '❌',
      `\x1b[31m[Interceptor: ${(error + '').replace(
        /(Error: |Authentication|UserInputError: )+/g,
        '',
      )}]\x1b[0m`,
      '😢',
    );
  }
}