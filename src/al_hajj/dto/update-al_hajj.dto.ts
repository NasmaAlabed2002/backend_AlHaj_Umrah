import { PartialType } from '@nestjs/swagger';
import { CreateAlHajjDto } from './create-al_hajj.dto';

export class UpdateAlHajjDto extends PartialType(CreateAlHajjDto) {}
