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
////////////////////////////////////////////////////////
// متغير يقوم المدير باسناد قيمة له حسب العمر المسموح للمسافرين
@Get('minimumAge')
getMinimumAge() {
  return { minimumAge: this.alHajjService.getMinimumAge() };
}

@Post('minimumAge')
setMinimumAge(@Body('minimumAge') minimumAge: number) {
  this.alHajjService.setMinimumAge(minimumAge);
  //return { message: 'Minimum age updated successfully.' };
}
/////////////////////////////////////
  @Get()
  findAll() {
    return this.alHajjService.findAll();
  }
  @Get('search/:nationalNumbercomp')
  async searchByNationalNumber(@Param('nationalNumbercomp') nationalNumbercomp: string): Promise<string> {
    try {
      const alhajjId = await this.alHajjService.findByNationalNumber(nationalNumbercomp);
      return alhajjId;
    } catch (error) {
      return error.message;
    }
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
}
