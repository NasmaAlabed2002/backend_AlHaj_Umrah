import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
const streamifier = require('streamifier');
import { CloudinaryResponse } from './cloudinary-response';
const { util } = require('util');
import { v2 as cloudinary } from 'cloudinary';
import { Stream } from 'stream';
@Injectable()


export class CloudinaryService {

    uploadImage(file: Express.Multer.File): Promise<CloudinaryResponse> {
        return new Promise<CloudinaryResponse>((resolve, reject) => {
          const uploadStream = cloudinary.uploader.upload_stream(
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            },
          );
    
          streamifier.createReadStream(file.buffer).pipe(uploadStream);
        });
      }
    // async uploadImage( file: Express.Multer.File) {
    //     return new promisify((async(resolve, reject) => {
    //         console.log("here");
    //         const pipline = promisify(Stream.pipeline , {context: Stream});
    //         console.log("here");
    //         const writeStream = v2.uploader.upload_stream( (err, image) => {
    //                           if (err) reject(err);
    //                           console.log("here");
    //                           console.log("image.url");
    //                           resolve(image.url);
    //                         } );
    //                         await pipline(file , writeStream)
    //      }))
    // }

}


