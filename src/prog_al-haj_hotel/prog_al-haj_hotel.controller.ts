import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgAlHajHotelService } from './prog_al-haj_hotel.service';
import { CreateProgAlHajHotelDto } from './dto/create-prog_al-haj_hotel.dto';
import { UpdateProgAlHajHotelDto } from './dto/update-prog_al-haj_hotel.dto';

@Controller('prog-al-haj-hotel')
export class ProgAlHajHotelController {
  constructor(private readonly progAlHajHotelService: ProgAlHajHotelService) {}

  @Post()
  create(@Body() createProgAlHajHotelDto: CreateProgAlHajHotelDto) {
    return this.progAlHajHotelService.create(createProgAlHajHotelDto);
  }

  @Get()
  findAll() {
    return this.progAlHajHotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progAlHajHotelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgAlHajHotelDto: UpdateProgAlHajHotelDto) {
    return this.progAlHajHotelService.update(id, updateProgAlHajHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progAlHajHotelService.remove(id);
  }
}
