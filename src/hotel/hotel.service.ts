import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity'
import { InjectModel } from '@nestjs/mongoose';
import { Model, Promise } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { createWriteStream } from 'fs';
import { Stream } from 'stream';
import { promisify } from 'util';
@Injectable()
export class HotelService {
  constructor(@InjectModel( Hotel.name) private  HotelModel: Model< Hotel>) {}
  async create(name :string, Number_stars:number ,location: string ,details: string , urlImagehotel:URL , urlImage , Services, Places_available_visit, link:URL) : Promise<Hotel> {
    const createdHotel= new this.HotelModel({name, Number_stars ,location, details , urlImagehotel , urlImage ,  Services, Places_available_visit, link});
    return createdHotel.save();
  }
 
  async findAll() {
    return await this.HotelModel.find();
  }

  async findById(id) {
    return await this.HotelModel.findById({_id:id});
  }
  
  async getHotelById(id: string): Promise<Hotel> {
    return this.HotelModel.findById(id);
  }

  async findone(id) {
    return await this.HotelModel.findOne({_id:id});
  }

   async update(id: string , updateHotelDto: UpdateHotelDto) {
    await this.HotelModel.findByIdAndUpdate(id , updateHotelDto , {new : true});
  }

  async remove(id: string) {
    await this.HotelModel.findByIdAndDelete(id);
  }
}
  // async createHotel(name: string, image: Buffer): Promise<HotelDocument> {
  //   const hotel = new this.HotelModel({ name, image });
  //   return hotel.save();
  // }
  // async getHotelImages(id): Promise<string> {
  //   const hotel = await this.HotelModel.findOne(id);
  //   if (!hotel) {
  //     throw new NotFoundException('Hotel not found');
  //   }

  //   return hotel.image;
  // }

  //   async getHotelImage(id: string): Promise<Buffer> {
//     const hotel = await this.HotelModel.findById(id).exec();
//     if (!hotel) throw new NotFoundException('Hotel not found');
//     return Buffer.from(hotel.image, 'base64');
    
//   }

//   async saveImage(file: Express.Multer.File): Promise<string> {
//     const fileName = uuidv4(); // Generate a unique filename
//     const filePath = `New folder/${fileName}`;// Specify the desired file path

//     return new Promise((resolve, reject) => {
//       const writeStream = createWriteStream(filePath);

//       writeStream.on('finish', () => {
//         resolve(filePath);
//       });

//       writeStream.on('error', (error) => {
//         reject(error);
//       });

//       writeStream.write(file.buffer);
//       writeStream.end();
//     });
//   }
//   async  generateImageURL(id: string) {
//     const imageUint8Array = await this.getHotelImage(id);
//     const base64String = Buffer.from(imageUint8Array).toString('base64');
//     const imageURL = `data:image/jpeg;base64,${base64String}`;
    
//     return imageURL;
// }