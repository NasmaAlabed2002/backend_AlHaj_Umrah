import { Module } from '@nestjs/common';
import { AlMutamirService } from './al_mutamir.service';
import { AlMutamirController } from './al_mutamir.controller';
import { AlMutamir , AlMutamirchema } from './entities/al_mutamir.entity';
import { CloudinaryController  } from 'src/cloudinary/cloudinary.controller';
import { CloudinaryProvider } from 'src/cloudinary/cloudinary.config';
import { CloudinaryService } from 'src/cloudinary/clodinary.service';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: AlMutamir.name, schema: AlMutamirchema }])],
  controllers: [AlMutamirController , CloudinaryController ],
  providers: [AlMutamirService , CloudinaryProvider , CloudinaryService ],
})
export class AlMutamirModule {}
