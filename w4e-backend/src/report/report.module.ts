import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { AuthenticationMiddleware } from 'src/common/authentication.middleware';

@Module({
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/report/post' },
      { method: RequestMethod.PUT, path: '/report/edit' },
      { method: RequestMethod.GET, path: '/report' },
      { method: RequestMethod.DELETE, path: '/report/delete' }
    )
  }
}
