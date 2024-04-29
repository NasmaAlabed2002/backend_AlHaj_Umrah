import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryService } from './clodinary.service';

 @Controller('CloudinaryController')
export class CloudinaryController {
    constructor(private readonly cloudinaryService: CloudinaryService) { }

    // @Post('upload')
    // @UseInterceptors(FileInterceptor('image'))
    // async uploadImage(@UploadedFile() file) {
    //   const imageUrl = await this.cloudinaryService.uploadImage(file);
    //   return { imageUrl };
    // }


  //   @Post('/image')
  //   // @UseInterceptors(FileInterceptor('image'))
  //   @ApiConsumes('multipart/form-data')
  //   @ApiBody({
  //     schema: {
  //       type: 'object',
  //       properties: {
  //         file:{
  //           type: 'string', format: 'binary',
  //       },
  //       },
  //     },
  // })
  // async uploadImage(@Req() req):Promise<any>
  // {
  //   const data = await req.file();
  //   const url = await this.cloudinaryService.uploadImage(data.path) as any;
  //   const trimUrl = url.substring(48);
  //   return('https://res.cloudinary.com/dj05jeavk/image/upload/v1713110570/' + trimUrl)
  // }

}