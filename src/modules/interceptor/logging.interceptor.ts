/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // Chỉ log khi là GraphQL request
    const gqlCtx = GqlExecutionContext.create(context);
    const graphqlContext = gqlCtx.getContext();

    // Kiểm tra có phải GraphQL không (an toàn)
    if (!graphqlContext?.req?.body?.query) {
      return next.handle();
    }

    const now = Date.now();
    const info = gqlCtx.getInfo();

    const actionType = info?.parentType?.name || 'Query/Mutation';
    const functionName = info?.fieldName || 'unknown';

    // Log request
    this.showLogAction(actionType, functionName, now);

    return next.handle().pipe(
      // Có thể thêm tap để log response nếu cần
      // tap({
      //   next: (val) => console.log('Response:', val),
      //   error: (err) => this.showLogError(err),
      // })
    );
  }

  /**
   * show log action type, function name, time exe and date time.
   */
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

  /**
   * show log error
   */
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
