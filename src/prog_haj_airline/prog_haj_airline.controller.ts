import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgHajAirlineService } from './prog_haj_airline.service';
import { CreateProgHajAirlineDto } from './dto/create-prog_haj_airline.dto';
import { UpdateProgHajAirlineDto } from './dto/update-prog_haj_airline.dto';

@Controller('prog-haj-airline')
export class ProgHajAirlineController {
  constructor(private readonly progHajAirlineService: ProgHajAirlineService) {}

  @Post()
  create(@Body() createProgHajAirlineDto: CreateProgHajAirlineDto) {
    return this.progHajAirlineService.create(createProgHajAirlineDto);
  }

  @Get()
  findAll() {
    return this.progHajAirlineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.progHajAirlineService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgHajAirlineDto: UpdateProgHajAirlineDto) {
    return this.progHajAirlineService.update(id, updateProgHajAirlineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.progHajAirlineService.remove(id);
  }
}
