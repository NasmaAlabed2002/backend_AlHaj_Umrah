import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProgramUmrahService } from './program_umrah.service';
import { CreateProgramUmrahDto } from './dto/create-program_umrah.dto';
import { UpdateProgramUmrahDto } from './dto/update-program_umrah.dto';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('program-umrah')
export class ProgramUmrahController {
  constructor(private readonly programUmrahService: ProgramUmrahService) { }

  // @Post()
  // create(@Body() createProgramUmrahDto: CreateProgramUmrahDto) {
  //   return this.programUmrahService.create(createProgramUmrahDto);
  // }
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {

        name_program: { type: 'string' },
        type_programUmrah: { type: 'string' },
        Date_Travel: { type: 'date' },
        total_stay: { type: 'number' },
        stay_in_macca: { type: 'number' },
        stay_in_madina: { type: 'number' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'successfully!' })
  async createHotel(

    @Body() createProgramUmrahDto: CreateProgramUmrahDto,
  ) {
    const { name_program, type_programUmrah, Date_Travel, total_stay , stay_in_macca, stay_in_madina } = createProgramUmrahDto;
    return this.programUmrahService.create( name_program, type_programUmrah, Date_Travel, total_stay , stay_in_macca, stay_in_madina);
  }

  @Get()
  findAll() {
    return this.programUmrahService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programUmrahService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramUmrahDto: UpdateProgramUmrahDto) {
    return this.programUmrahService.update(id, updateProgramUmrahDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programUmrahService.remove(id);
  }
}
