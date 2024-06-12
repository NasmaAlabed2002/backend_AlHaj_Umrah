import { Injectable } from '@nestjs/common';
import { CreateAlHajjDto } from './dto/create-al_hajj.dto';
import { UpdateAlHajjDto } from './dto/update-al_hajj.dto';
import { AlHajj } from './entities/al_hajj.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class AlHajjService {


  constructor(@InjectModel( AlHajj.name) private  AlHajjModel: Model< AlHajj>) {}
  async create(createAlHajjDto: CreateAlHajjDto) : Promise<AlHajj> {
    // if (createAlHajjDto.gender === 'female' && this.calculateAge(createAlHajjDto.birth) < 45) {
    //   if(!createAlHajjDto.Nationality){throw new Error('Please provide the escort ID for a male traveler to accompany you.');
    // }}
   if (this.calculateAge(createAlHajjDto.birth) <44 ) {
      throw new Error('Sorry, you are under the age allowed for travel');
    }
    const createdAlHajj= new this.AlHajjModel(createAlHajjDto)
    return createdAlHajj.save();
  }

  private calculateAge(dateOfBirth: Date): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  private async findMaleCompanion(): Promise<AlHajj | null> {
    return this.AlHajjModel.findOne({ gender: 'male' }).exec();
  }

  async calculateAgeFromDOB( _id: string): Promise<number> {
    const AlHajjage = await this.AlHajjModel.findById(_id).exec();
    if (!AlHajjage) {
      throw new Error('AlHajj not found');
    }
    const dob = AlHajjage.birth;
    const ageDiffMs = Date.now() - dob.getTime();
    const ageDate = new Date(ageDiffMs);
    return  Math.abs(ageDate.getUTCFullYear() - 1970);
  }


  async findAll() {
    return await this.AlHajjModel.find();
  }

  async findOne(id: string) {
    return await this.AlHajjModel.findOne({_id:id});
  }

 async update(id: string, updateAlHajjDto: UpdateAlHajjDto) {
  await this.AlHajjModel.findByIdAndUpdate(id , updateAlHajjDto, {new : true});
  }

  async remove(id: string) {
    await this.AlHajjModel.findByIdAndDelete(id);
  }
}


