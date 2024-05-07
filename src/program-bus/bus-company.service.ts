import { Injectable } from '@nestjs/common';
import { busCompany , busCompanyDocument } from './entities/bus-company.schema';
import { BusCompanyDto } from './dto/bus-company.dto';
import { UpdateBusCompanyDto } from './dto/update-bus-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BusCompanyService {
  constructor(  @InjectModel(busCompany.name) private readonly busCompanyModel: Model<busCompanyDocument>) { }
  async createBusCompany(  name_company: string,  Services, goals_company , urlImageCompany:URL , urlImage,link: URL, type_bus: string , price_tecket: string): Promise<busCompany> {
    const createdBusCompany = new this.busCompanyModel({name_company,  Services, goals_company , urlImageCompany , urlImage,link, type_bus , price_tecket});
    return createdBusCompany.save();
  }
  async findAllBusCompanies(): Promise<busCompany[]> {
    return await this.busCompanyModel.find();
  }
  async updateBusCompanie(id: string, updateBusCompanyDto: UpdateBusCompanyDto) {
    await this.busCompanyModel.findByIdAndUpdate (id ,updateBusCompanyDto , {new : true});
  }
  async removeBusCompanie(id: string) {
    await this.busCompanyModel.findByIdAndDelete(id);
   }
//   async findAll() {
//     return await this.ProgAlHajHotelModel.find();
//   }

//   async findOne(id: string) {
//     return await this.ProgAlHajHotelModel.findOne({ _id: id });
//   }
//   async update(id: string, updateProgAlHajHotelDto: UpdateProgAlHajHotelDto) {
//     await this.ProgAlHajHotelModel.findByIdAndUpdate(id, updateProgAlHajHotelDto, { new: true });
//   }

//   async remove(id: string) {
//     await this.ProgAlHajHotelModel.findByIdAndDelete(id);
//   }
}
