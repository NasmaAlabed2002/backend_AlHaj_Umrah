import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlHajjService } from './al_hajj.service';
import { CreateAlHajjDto } from './dto/create-al_hajj.dto';
import { UpdateAlHajjDto } from './dto/update-al_hajj.dto';

@Controller('al-hajj')
export class AlHajjController {
  constructor(private readonly alHajjService: AlHajjService) {}

  @Post()
  create(@Body() createAlHajjDto: CreateAlHajjDto) {
    return this.alHajjService.create(createAlHajjDto);
  }
  @Get()
  findAll() {
    return this.alHajjService.findAll();
  }

  @Get(':id/age')
  async getAge(@Param('id') id: string): Promise<number> {
    return this.alHajjService.calculateAgeFromDOB(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alHajjService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlHajjDto: UpdateAlHajjDto) {
    return this.alHajjService.update(id, updateAlHajjDto);
  }
 
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alHajjService.remove(id);
    
  }
  // @Delete()
  // deleteAllRecords() {
  //   return this.alHajjService.deleteAllRecords();
  // }
}
