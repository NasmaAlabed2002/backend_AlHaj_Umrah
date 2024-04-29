import { Module } from '@nestjs/common';
import { AlMutamirService } from './al_mutamir.service';
import { AlMutamirController } from './al_mutamir.controller';
import { AlMutamir , AlMutamirchema } from './entities/al_mutamir.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: AlMutamir.name, schema: AlMutamirchema }])],
  controllers: [AlMutamirController],
  providers: [AlMutamirService],
})
export class AlMutamirModule {}
