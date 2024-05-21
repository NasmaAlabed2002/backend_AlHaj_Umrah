import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
const streamifier = require('streamifier');
import { CloudinaryResponse } from './cloudinary-response';
const { util } = require('util');
import { v2 as cloudinary } from 'cloudinary';
import { Stream } from 'stream';
@Injectable()


export class CloudinaryService {
 
    async uploadImage(file: any) {
        return new Promise((async(resolve, reject) => {
            const pipline = util.promisify(Stream.pipeline);
            const writeStream = v2.uploader.upload_stream( (err, image) => {
                              if (err) reject(err);
                              resolve(image.url);
                            } );
                            await pipline(file , writeStream)

         }))
    }

}


