import { PartialType } from '@nestjs/swagger';
import { CreateProgUmrahHotelDto } from './create-prog_umrah_hotel.dto';

export class UpdateProgUmrahHotelDto extends PartialType(CreateProgUmrahHotelDto) {}
