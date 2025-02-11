import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as serverless from 'serverless-http';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());
  app.enableCors();
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();
  // 修复serverless调用问题，使用default属性
  return serverless.default(expressApp);
}
// 导出handler函数供Vercel使用
let handler: any;
// 初始化handler
bootstrap().then(h => {
  handler = h;
});
export { handler };
