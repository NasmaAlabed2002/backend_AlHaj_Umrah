import { Injectable } from '@nestjs/common';
import { CreateAlHajjDto } from './dto/create-al_hajj.dto';
import { UpdateAlHajjDto } from './dto/update-al_hajj.dto';
import { AlHajj } from './entities/al_hajj.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProgUmrahAirline } from 'src/prog_umrah_airline/entities/prog_umrah_airline.entity';
@Injectable()
export class AlHajjService {

 
  constructor(@InjectModel( AlHajj.name) private  AlHajjModel: Model< AlHajj> ,
  @InjectModel( ProgUmrahAirline.name) private  ProgUmrahAirlineModel: Model< ProgUmrahAirline>) {}
  async create(createAlHajjDto: CreateAlHajjDto) : Promise<AlHajj> {
    // if (createAlHajjDto.gender === 'female' && this.calculateAge(createAlHajjDto.birth) < 45) {
    //   if(!createAlHajjDto.Nationality){throw new Error('Please provide the escort ID for a male traveler to accompany you.');
    // }}
    const idagedemend = "666b726e4e59ac3549dcf92a";
    const min = await this.ProgUmrahAirlineModel.findOne({_id:idagedemend});
    console.log(min.minimumAge);
    console.log(this.calculateAge(min.minimumAge));
    console.log(this.calculateAge(createAlHajjDto.birth));
    // const minmumage1 = global.minimumage;
    // console.log( minmumage1 );
    console.log(createAlHajjDto.birth);
    console.log(createAlHajjDto.birth < min.minimumAge);
    const age1 = this.calculateAge(createAlHajjDto.birth);
    const age2 = this.calculateAge(min.minimumAge);
    console.log(!createAlHajjDto.iscompanion); 
    if(!createAlHajjDto.iscompanion){
      if (age1.years < age2.years ||
        (age1.years === age2.years && age1.months < age2.months) ||
        (age1.years === age2.years && age1.months === age2.months && age1.days < age2.days)) {
      throw new Error('Sorry, you are under the age allowed for travel');
    }
    }
    const createdAlHajj= new this.AlHajjModel(createAlHajjDto)
    return createdAlHajj.save();
  }

  private calculateAge(dateOfBirth: Date): { years: number, months: number, days: number } {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    if (isNaN(birthDate.getTime())) {
        throw new Error('Invalid date of birth');
    }
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) {
        months--;
        const totalDaysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days = totalDaysInMonth + days;
    }
    if (months < 0) {
        years--;
        months = 12 + months;
    }
    return { years, months, days };
}
  private async findMaleCompanion(): Promise<AlHajj | null> {
    return this.AlHajjModel.findOne({ gender: 'male' }).exec();
  }

  async calculateAgeFromDOB( _id: string): Promise<number> {
    console.log( global.minimumage);
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
  async deleteAllRecords(): Promise<any> {
    try {
      const result = await this.AlHajjModel.deleteMany({});
      return result;
    } catch (error) {
      throw new Error('Failed to delete records');
    }
  }
}


