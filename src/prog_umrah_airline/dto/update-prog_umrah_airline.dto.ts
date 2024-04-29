import { PartialType } from '@nestjs/swagger';
import { CreateProgUmrahAirlineDto } from './create-prog_umrah_airline.dto';

export class UpdateProgUmrahAirlineDto extends PartialType(CreateProgUmrahAirlineDto) {}
