import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [PropertyModule, DogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
