import { Module } from '@nestjs/common';
import { OfficeService } from './office.service';
import { OfficeController } from './office.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Office , Officechema } from './entities/office.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: Office.name, schema: Officechema }])],
  controllers: [OfficeController],
  providers: [OfficeService],
})
export class OfficeModule {}
