import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgUmrahAirlineService } from './prog_umrah_airline.service';
import { CreateProgUmrahAirlineDto } from './dto/create-prog_umrah_airline.dto';
import { UpdateProgUmrahAirlineDto } from './dto/update-prog_umrah_airline.dto';

@Controller('minimumAge')
export class ProgUmrahAirlineController {
  constructor(private readonly progUmrahAirlineService: ProgUmrahAirlineService) {}
  // @Post()
  // create(@Body() createProgUmrahAirlineDto: CreateProgUmrahAirlineDto) {
  //   global.minimumage =  JSON.stringify(createProgUmrahAirlineDto)
  //    console.log(JSON.stringify(createProgUmrahAirlineDto));
  //    console.log( global.minimumage);
  //    return this.progUmrahAirlineService.create(createProgUmrahAirlineDto)
  // }
  @Get()
  findAll() {
    return this.progUmrahAirlineService.findAll();
  }
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.progUmrahAirlineService.findOne(id);
  // }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgUmrahAirlineDto: UpdateProgUmrahAirlineDto) {
    global.minimumage =  JSON.stringify(updateProgUmrahAirlineDto)
     console.log(JSON.stringify(updateProgUmrahAirlineDto));
     console.log( global.minimumage);
    return this.progUmrahAirlineService.update(id, updateProgUmrahAirlineDto);
  }

//  @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.progUmrahAirlineService.remove(id);
//   }
}
