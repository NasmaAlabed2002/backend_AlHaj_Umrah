import { PartialType } from '@nestjs/swagger';
import { CreateProgramAlHajDto } from './create-program_al-haj.dto';

export class UpdateProgramAlHajDto extends PartialType(CreateProgramAlHajDto) {}
