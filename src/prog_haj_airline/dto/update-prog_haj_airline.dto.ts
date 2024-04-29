import { PartialType } from '@nestjs/swagger';
import { CreateProgHajAirlineDto } from './create-prog_haj_airline.dto';

export class UpdateProgHajAirlineDto extends PartialType(CreateProgHajAirlineDto) {}
