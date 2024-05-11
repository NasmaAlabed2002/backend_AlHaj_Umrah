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

  async createBusCompany( busCompanyDto:BusCompanyDto): Promise<busCompany> {
    const createdBusCompany = new this.busCompanyModel(busCompanyDto);
    return createdBusCompany.save();
  }
  // async createBusCompany(  name_company: string,  Services, goals_company , urlImageCompany:URL , urlImage,link: URL, type_bus: string , price_tecket: string): Promise<busCompany> {
  //   const createdBusCompany = new this.busCompanyModel({name_company,  Services, goals_company , urlImageCompany , urlImage,link, type_bus , price_tecket});
  //   return createdBusCompany.save();
  // }
  async findAllBusCompanies(): Promise<busCompany[]> {
    return await this.busCompanyModel.find();
  }
  async updateBusCompanie(id: string, updateBusCompanyDto: UpdateBusCompanyDto) {
    await this.busCompanyModel.findByIdAndUpdate (id ,updateBusCompanyDto , {new : true});
  }
  async removeBusCompanie(id: string) {
    await this.busCompanyModel.findByIdAndDelete(id);
   }

   async  getCompanyIdByName(name_company: string): Promise<string> {
    try {
      const busCompany = await this.busCompanyModel.findOne({ name_company });
  
      if (!busCompany) {
        throw new Error('Bus company not found');
      }
  
      return  busCompany._id ;
    } catch (error) {
      console.error('Error retrieving company ID:', error.message);
      throw error;
    }
  }
}