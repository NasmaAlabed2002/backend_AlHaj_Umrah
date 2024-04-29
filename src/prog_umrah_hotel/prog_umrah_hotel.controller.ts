import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgUmrahHotelService } from './prog_umrah_hotel.service';
import { CreateProgUmrahHotelDto } from './dto/create-prog_umrah_hotel.dto';
import { UpdateProgUmrahHotelDto } from './dto/update-prog_umrah_hotel.dto';

@Controller('prog-umrah-hotel')
export class ProgUmrahHotelController {
  constructor(private readonly progUmrahHotelService: ProgUmrahHotelService) {}

  @Post()
  create(@Body() createProgUmrahHotelDto: CreateProgUmrahHotelDto) {
    return this.progUmrahHotelService.create(createProgUmrahHotelDto);
  }

  @Get()
  findAll() {
    return this.progUmrahHotelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progUmrahHotelService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgUmrahHotelDto: UpdateProgUmrahHotelDto) {
    return this.progUmrahHotelService.update(id, updateProgUmrahHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progUmrahHotelService.remove(id);
  }
}
