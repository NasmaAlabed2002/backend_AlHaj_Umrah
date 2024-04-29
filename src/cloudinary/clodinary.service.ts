import { Injectable } from '@nestjs/common';
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
const streamifier = require('streamifier');
import { CloudinaryResponse } from './cloudinary-response';
const { util } = require('util');
import { v2 as cloudinary } from 'cloudinary';
import { Stream } from 'stream';
@Injectable()


export class CloudinaryService {
 
    // async uploadImage(file: any) {
        // return new Promise((async(resolve, reject) => {
        //     const pipline = util.promisify(Stream.pipeline);
        //     const writeStream = v2.uploader.upload_stream( (error, image) => {
        //                       if (error) return reject(error);
        //                       resolve(image.url);
        //                     } );
        //                     await pipline(file , writeStream)

        //  }))
    // }

    // async uploadImage(file: Express.Multer.File) : Promise<CloudinaryResponse> {
    //     return new Promise<CloudinaryResponse> ((resolve, reject) => {
          
    //         const uploadStream = cloudinary.uploader.upload_stream(
    //             (error, result) => {
    //               if (error) return reject(error);
    //               resolve(result);
    //             },
    //           );
    //           streamifier.createReadStream(file.buffer).pipe(uploadStream);
    //     });
    // }
    // async uploadImage(
    //     filepath: string
    // ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    //     return new Promise((resolve, reject) => {
    //         v2.uploader.upload_stream( filepath , { folder: ' dasda' } , (error, result) => {
    //             if (error)  reject(error);
    //             resolve(result);


    //         })

    //     })

    // }
}


