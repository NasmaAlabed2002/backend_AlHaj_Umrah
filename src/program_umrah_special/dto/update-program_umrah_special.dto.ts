import { PartialType } from '@nestjs/swagger';
import { CreateProgramUmrahSpecialDto } from './create-program_umrah_special.dto';

export class UpdateProgramUmrahSpecialDto extends PartialType(CreateProgramUmrahSpecialDto) {}
