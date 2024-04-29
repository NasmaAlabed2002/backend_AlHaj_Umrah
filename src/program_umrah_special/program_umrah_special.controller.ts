import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ProgramUmrahSpecialService } from './program_umrah_special.service';
import { CreateProgramUmrahSpecialDto } from './dto/create-program_umrah_special.dto';
import { UpdateProgramUmrahSpecialDto } from './dto/update-program_umrah_special.dto';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('program-umrah-special')
export class ProgramUmrahSpecialController {
  constructor(private readonly programUmrahSpecialService: ProgramUmrahSpecialService) {}

  // @Post()
  // create(@Body() createProgramUmrahSpecialDto: CreateProgramUmrahSpecialDto) {
  //   return this.programUmrahSpecialService.create(createProgramUmrahSpecialDto);
  // }
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {

        name_program: { type: 'string' },
        Date_Travel: { type: 'date' },
        total_stay: { type: 'number' },
        stay_in_macca: { type: 'number' },
        stay_in_madina: { type: 'number' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'successfully!' })
  async createHotel(

    @Body() createProgramUmrahDto: CreateProgramUmrahSpecialDto,
  ) {
    const { name_program, Date_Travel, total_stay , stay_in_macca, stay_in_madina } = createProgramUmrahDto;
    return this.programUmrahSpecialService.create( name_program, Date_Travel, total_stay , stay_in_macca, stay_in_madina);
  }
  @Get()
  findAll() {
    return this.programUmrahSpecialService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programUmrahSpecialService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramUmrahSpecialDto: UpdateProgramUmrahSpecialDto) {
    return this.programUmrahSpecialService.update(id, updateProgramUmrahSpecialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programUmrahSpecialService.remove(id);
  }
}
