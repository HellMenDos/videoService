import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...', context.switchToHttp().getRequest().headers);
    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap((data) => {
          data.id = 10
          console.log(`After... ${Date.now() - now}ms`)
          return data
        }),
      );
  }
}



