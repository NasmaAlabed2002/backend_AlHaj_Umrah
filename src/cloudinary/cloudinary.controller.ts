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
  {
    const data = await req.file;
    console.log(data);
    const url=  await this.cloudinaryService.uploadImage(data) as any;
    return url.secure_url
  }

}