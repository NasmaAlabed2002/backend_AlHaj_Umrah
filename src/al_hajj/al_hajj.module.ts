import { Module } from '@nestjs/common';
import { AlHajjService } from './al_hajj.service';
import { AlHajjController } from './al_hajj.controller';
import { AlHajj , AlHajjchema } from './entities/al_hajj.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ProgUmrahAirline , ProgUmrahAirlinechema } from 'src/prog_umrah_airline/entities/prog_umrah_airline.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: AlHajj.name, schema: AlHajjchema },
    { name: ProgUmrahAirline.name, schema: ProgUmrahAirlinechema }
  ])],
  controllers: [AlHajjController],
  providers: [AlHajjService],
})
export class AlHajjModule {}
