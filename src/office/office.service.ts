import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { Office } from './entities/office.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class OfficeService {
  constructor(@InjectModel( Office.name) private  OfficeModel: Model< Office>) {}
  async create(createOfficeDto: CreateOfficeDto): Promise< Office> {
    const createdOffice  = new this.OfficeModel(createOfficeDto)
    return createdOffice.save();
  }

  async findAll() {
    return await this.OfficeModel.find();
  }

  async findOne(id: string) {
    return await this.OfficeModel.findOne({_id:id})
  }

 async update(id: string, updateOfficeDto: UpdateOfficeDto) {
    await this.OfficeModel.findByIdAndUpdate( id , updateOfficeDto , {new:true})
   
  }

 async remove(id: string) {
   await this.OfficeModel.findByIdAndDelete(id);
  }
}
