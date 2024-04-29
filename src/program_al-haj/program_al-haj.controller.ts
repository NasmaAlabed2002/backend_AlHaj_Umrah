import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramAlHajService } from './program_al-haj.service';
import { CreateProgramAlHajDto } from './dto/create-program_al-haj.dto';
import { UpdateProgramAlHajDto } from './dto/update-program_al-haj.dto';

@Controller('program-al-haj')
export class ProgramAlHajController {
  constructor(private readonly programAlHajService: ProgramAlHajService) {}

  @Post()
  create(@Body() createProgramAlHajDto: CreateProgramAlHajDto) {
    return this.programAlHajService.create(createProgramAlHajDto);
  }

  @Get()
  findAll() {
    return this.programAlHajService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programAlHajService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramAlHajDto: UpdateProgramAlHajDto) {
    return this.programAlHajService.update(id, updateProgramAlHajDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programAlHajService.remove(id);
  }
}
