import { Module } from '@nestjs/common';
import { ProgramUmrahSpecialService } from './program_umrah_special.service';
import { ProgramUmrahSpecialController } from './program_umrah_special.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgramUmrahSpecial , ProgramUmrahSpecialchema } from './entities/program_umrah_special.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: ProgramUmrahSpecial.name, schema: ProgramUmrahSpecialchema }])],
  controllers: [ProgramUmrahSpecialController],
  providers: [ProgramUmrahSpecialService],
})
export class ProgramUmrahSpecialModule {}
