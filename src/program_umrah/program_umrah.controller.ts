import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProgramUmrahService } from './program_umrah.service';
import { CreateProgramUmrahDto } from './dto/create-program_umrah.dto';
import { UpdateProgramUmrahDto } from './dto/update-program_umrah.dto';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
@Controller('program-umrah')
export class ProgramUmrahController {
  constructor(private readonly programUmrahService: ProgramUmrahService) { }

  @Post()
  create(@Body() createProgramUmrahDto: CreateProgramUmrahDto) {
    return this.programUmrahService.create(createProgramUmrahDto);
  }
  // @Post()
  // @UseInterceptors(FileInterceptor('image'))
  // @ApiConsumes('multipart/form-data')
  // @ApiBody({
  //   schema: {
  //     type: 'object',
  //     properties: {
  //       name_program: { type: 'String' },
  //       Date_Travel: { type: 'Date' },
  //       Date_Travel_Hijri :{ type: 'Date' },
  //       total_stay: { type: 'Number' },
  //       stay_in_macca: { type: 'Number' },
  //       stay_in_madina: { type: 'Number' },
  //       image:{ type: 'URL' },
  //       price1: { type: 'String' },
  //       price2: { type: 'String' },
  //       price3:{ type: 'String' },
  //       price4: { type: 'String' },
  //     },
  //   },
  // })
  // @ApiResponse({ status: 201, description: 'successfully!' })
  // async createHotel(

  //   @Body() createProgramUmrahDto: CreateProgramUmrahDto,
  // ) {
  //   const { name_program,  Date_Travel,  Date_Travel_Hijri, total_stay , stay_in_macca, stay_in_madina ,image , price1, price2, price3, price4} = createProgramUmrahDto;
  //   return this.programUmrahService.create( name_program,  Date_Travel,  Date_Travel_Hijri, total_stay , stay_in_macca, stay_in_madina , image , price1, price2 , price3, price4);
  // }

  @Get()
  findAll() {
    return this.programUmrahService.findAll();
  }

  @Get('AvailablePrograms')
  find() {
    return this.programUmrahService.getAvailablePrograms();
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
