import { PartialType } from '@nestjs/swagger';
import { CreateProgAlHajHotelDto } from './create-prog_al-haj_hotel.dto';

export class UpdateProgAlHajHotelDto extends PartialType(CreateProgAlHajHotelDto) {}
