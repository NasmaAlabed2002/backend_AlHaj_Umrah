import { Injectable, NotFoundException } from '@nestjs/common';
import { BusCompanyDto , UpdateBusCompanyDto } from './dto/bus-company.dto';
import { busCompany , busCompanySchema , busCompanyDocument} from './entities/bus-company.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class BusCompanyService {
  constructor(
    @InjectModel(busCompany.name) private readonly busCompanyModel: Model<busCompanyDocument>,
  ) {}

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
}