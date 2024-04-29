import { Module } from '@nestjs/common';
import { ProgramUmrahService } from './program_umrah.service';
import { ProgramUmrahController } from './program_umrah.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramUmrah , ProgramUmrahchema } from './entities/program_umrah.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: ProgramUmrah.name, schema: ProgramUmrahchema }])],
  controllers: [ProgramUmrahController],
  providers: [ProgramUmrahService],
})
export class ProgramUmrahModule {}
