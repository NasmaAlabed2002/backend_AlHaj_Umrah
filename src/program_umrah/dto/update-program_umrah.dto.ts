import { PartialType } from '@nestjs/swagger';
import { CreateProgramUmrahDto } from './create-program_umrah.dto';

export class UpdateProgramUmrahDto extends PartialType(CreateProgramUmrahDto) {}
