import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Validation Pipe
  // groups: ['create'], 'update'] not working here
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     // transform: true,
  //   }),
  // );

  await app.listen(port);
}
bootstrap()
  .then(() => {
    console.log(
      `Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`,
    );
  })
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
