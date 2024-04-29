import { PartialType } from '@nestjs/mapped-types';
import { CreateProgramBusDto } from './create-program-bus.dto';

export class UpdateProgramBusDto extends PartialType(CreateProgramBusDto) {}
