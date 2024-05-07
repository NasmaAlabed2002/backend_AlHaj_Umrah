import { PartialType } from '@nestjs/mapped-types';
import { BusCompanyDto } from './bus-company.dto';
export class UpdateBusCompanyDto extends PartialType(BusCompanyDto) {}
