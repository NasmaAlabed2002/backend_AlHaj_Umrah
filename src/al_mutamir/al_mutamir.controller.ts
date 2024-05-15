import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlMutamirService } from './al_mutamir.service';
import { CreateAlMutamirDto } from './dto/create-al_mutamir.dto';
import { UpdateAlMutamirDto } from './dto/update-al_mutamir.dto';

@Controller('al-mutamir')
export class AlMutamirController {
  constructor(private readonly alMutamirService: AlMutamirService) {}

  @Post()
  create(@Body() createAlMutamirDto: CreateAlMutamirDto) {
    return this.alMutamirService.create(createAlMutamirDto);
  }

  @Get()
  findAll() {
    return this.alMutamirService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alMutamirService.findOne(id);
  }
  @Get(':number/room and name hotel')
  async getRoomByNumber(@Param('number') number: number): Promise<any> {
    const roomWithHotel = await this.alMutamirService.getRoomByNumber ( number);
    return roomWithHotel;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlMutamirDto: UpdateAlMutamirDto) {
    return this.alMutamirService.update(id, updateAlMutamirDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alMutamirService.remove(id);
  }
}
