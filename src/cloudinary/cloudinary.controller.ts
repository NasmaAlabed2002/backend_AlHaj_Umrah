import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseInterceptors, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { MulterModule } from '@nestjs/platform-express';
import { CloudinaryService } from './clodinary.service';

 @Controller('CloudinaryController')
export class CloudinaryController {
    constructor(private readonly cloudinaryService: CloudinaryService) { }


    @Post('/image')
    // @UseInterceptors(FileInterceptor('image'))
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
  async uploadImage(@Req() req):Promise<any>
  {
    const data = await req.file();
    const url = await this.cloudinaryService.uploadImage(data.file) as any;
    const trimUrl = url.substring(48);
    return('https://upload-request.cloudinary.com/dj05jeavk/6edf65f7c0f593477dd4ca4ed1c2a7f2' + trimUrl)
  }

}