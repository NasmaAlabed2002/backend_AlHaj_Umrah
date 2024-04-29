import { Module } from '@nestjs/common';
import { ProgramAlHajService } from './program_al-haj.service';
import { ProgramAlHajController } from './program_al-haj.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramAlHaj , ProgramAlHajchema } from 'src/program_al-haj/entities/program_al-haj.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: ProgramAlHaj.name, schema: ProgramAlHajchema }])],
  controllers: [ProgramAlHajController],
  providers: [ProgramAlHajService],
})
export class ProgramAlHajModule {}
