import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';
import { FiltersModule } from './filters/filters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    CloudinaryModule,
    FiltersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
