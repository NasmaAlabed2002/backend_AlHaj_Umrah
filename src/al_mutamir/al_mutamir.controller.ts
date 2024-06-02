import { Controller, Get, Post, Body, Patch, Param, Delete , UseInterceptors,Req  } from '@nestjs/common';
import { AlMutamirService } from './al_mutamir.service';
import { CreateAlMutamirDto } from './dto/create-al_mutamir.dto';
import { UpdateAlMutamirDto } from './dto/update-al_mutamir.dto';
import { CloudinaryService } from 'src/cloudinary/clodinary.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('al-mutamir')
export class AlMutamirController {
  constructor(private readonly alMutamirService: AlMutamirService ,  private readonly cloudinaryService: CloudinaryService) {}
  @Post()
  create(@Body() createAlMutamirDto: CreateAlMutamirDto) {
    return this.alMutamirService.create(createAlMutamirDto);
  }
  @Post('/almutamir_photo')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file:{
          type: 'string', format: 'binary',
      },
      },
    },
})
async uploadImage( @Req() req)
// :Promise<string>
{

  console.log("before req");
  const data = await req.file;
  console.log("after req");
  console.log(data);
  console.log("after req");
  console.log(data);
  const url =  await this.cloudinaryService.uploadImage(data) as any;
  const secureUrl = url.secure_url;
  const almutamir = await this.alMutamirService.saveImage(secureUrl)
  return secureUrl;
}

  @Get()
  findAll() {
    return this.alMutamirService.findAll();
  }
  @Get('VerificationNotTrue')
  findVerificationNotTrue() {
    return this.alMutamirService.findVerificationNotTrue();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alMutamirService.findOne(id);
  }
  @Get(':id/room')
  async getRoomByNumber(@Param('id') id: string){
    const roomWithHotel = await this.alMutamirService.getRoomByNumber(id);
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
