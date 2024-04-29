import { PartialType } from '@nestjs/swagger';
import { CreateAlMutamirDto } from './create-al_mutamir.dto';

export class UpdateAlMutamirDto extends PartialType(CreateAlMutamirDto) {}
