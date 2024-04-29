import { Module } from '@nestjs/common';
import { HotelService } from './hotel.service';
import { HotelController } from './hotel.controller';
import { MulterModule } from '@nestjs/platform-express';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, Hotelchema } from './entities/hotel.entity'
@Module({
  imports: [MongooseModule.forFeatureAsync([{
    name: Hotel.name,
    useFactory: () => {
      const schema = Hotelchema;
      return schema;
    }
  }])

  ],

  controllers: [HotelController],
  providers: [HotelService],
})
export class HotelModule { }

// import { diskStorage } from 'multer';
// import { extname } from 'path';

// export const multerOptions = {
//   storage: diskStorage({
//     destination: './uploads',
//     filename: (req, file, callback) => {
//       const randomName = Array(32)
//         .fill(null)
//         .map(() => Math.round(Math.random() * 16).toString(16))
//         .join('');
//       callback(null, `${randomName}${extname(file.originalname)}`);
//     },
//   }),
// };