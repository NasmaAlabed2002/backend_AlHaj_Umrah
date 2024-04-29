import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary';
import { CloudinaryService } from './clodinary.service';
import {CloudinaryController} from './cloudinary.controller';
import { MulterModule } from '@nestjs/platform-express';
@Module({
  // imports: [
  //   MulterModule.register({
  //     dest: './picture', // المسار الذي سيتم تخزين الملفات المرفوعة إليه
  //   }),
  // ],
  // controllers :[CloudinaryController],
  // providers: [CloudinaryProvider, CloudinaryService],
  // exports: [CloudinaryProvider, CloudinaryService],
})
export class CloudinaryModule {}