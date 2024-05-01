import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { MulterModule } from '@nestjs/platform-express';
import { Hotel } from './entities/hotel.entity';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('Hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) { }

  // @Post()
  // create(@Body() createHotelDto: CreateHotelDto) {
  //   return this.hotelService.create(createHotelDto);
  // }
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {

        name: { type: 'string' },
        Number_stars: { type: 'number' },
        location: { type: 'string' },
        details: { type: 'string' },
        urlImagehotel: { type: 'URL' },
        urlImage : {type: 'array', items: { type: 'string' } },
        Services: {type: 'array', items: { type: 'string' }  },
        Places_available_visit: {type: 'array', items: { type: 'string' }  },
        link: { type: 'URL' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Hotel and image uploaded successfully!' })
  async createHotel(
    @UploadedFile() file: Express.Multer.File,
    @Body() createHotelDto: CreateHotelDto,
  ) {
    const { name, Number_stars, location, details, urlImagehotel, urlImage, Services, Places_available_visit, link } = createHotelDto;
    return this.hotelService.create(name, Number_stars, location, details,urlImagehotel,  urlImage,  Services, Places_available_visit, link);
  }

  @Get(':id')
  async getHotelById(@Param('id') id: string) {
    const hotel = await this.hotelService.getHotelById(id);
    return hotel;
  }

  @Get()
  findAll() {
    return this.hotelService.findAll();
  }
  @Get(':location')
  findOne(@Param('id') id: string) {
    return this.hotelService.findone(id)

  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.hotelService.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, 
  @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelService.update(id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelService.remove(id);
  }
}
// @Post(':id/upload')
// @UseInterceptors(FileInterceptor('image'))
// async uploadImage(
//   @Param('id') id: string,
//   @UploadedFile() image: Express.Multer.File,
// ){
//   const imageUrl = `New folder/photo_2024-03-29_02-15-45.jpg`;
//   const hotel = await this.hotelService.findById(id);
//   hotel.imageUrl = imageUrl;
//    return this.hotelService.update(id, hotel);
// }

        
  // @Get(':id/image')
  // async getLaboratoryImage(@Param('id') id: string, @Res() res: Response) {
  //   const image = await this.hotelService.getHotelImage(id);
  //    res.setHeader('Content-Type', 'image/jpeg');
  //    res.send(image);
  // }

    // @Get(':id/imagerr')
  // async generateImageURL(@Param('id') id: string) {
  //   const imagee = await this.hotelService.generateImageURL(id);
  //   return imagee;
  // }