import { Module } from '@nestjs/common';
import { AlHajjService } from './al_hajj.service';
import { AlHajjController } from './al_hajj.controller';
import { AlHajj , AlHajjchema } from './entities/al_hajj.entity';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forFeature([{ name: AlHajj.name, schema: AlHajjchema }])],
  controllers: [AlHajjController],
  providers: [AlHajjService],
})
export class AlHajjModule {}
