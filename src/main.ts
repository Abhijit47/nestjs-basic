import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = process.env.PORT || 3000;
console.log(
  `Launching NestJS app on port ${port}, URL: http://0.0.0.0:${port}`,
);

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
      `Application is running on: http://localhost:${process.env.PORT ?? 3000}`,
    );
  })
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
