import { Injectable } from '@nestjs/common';
import { CreateProgramUmrahSpecialDto } from './dto/create-program_umrah_special.dto';
import { UpdateProgramUmrahSpecialDto } from './dto/update-program_umrah_special.dto';
import { ProgramUmrahSpecial } from './entities/program_umrah_special.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { compareAsc, differenceInDays } from 'date-fns';
@Injectable()
export class ProgramUmrahSpecialService {
  constructor(@InjectModel( ProgramUmrahSpecial.name) private  ProgramUmrahSpecialModel: Model< ProgramUmrahSpecial>) {}
  async create(createProgramUmrahSpecialDto : CreateProgramUmrahSpecialDto) : Promise< ProgramUmrahSpecial> {
    function daysDifference(startDate: Date, endDate: Date): number {
      return differenceInDays(startDate, endDate);
  }
  const bookingDate = new Date(); // تاريخ الحجز الحالي
  const travelDate = new Date(createProgramUmrahSpecialDto.Date_Travel); // تحويل قيمة Date_Travel إلى كائن تاريخ
  const daysDiff = daysDifference(bookingDate, travelDate);
  if (daysDiff < 15) {
    throw new Error('Booking date must be at least 15 days before travel date')
    console.log('Booking date must be at least 15 days before travel date');
  } else {
    console.log('تم قبول الحجز');
   }
    const createdPRUM = new this.ProgramUmrahSpecialModel(createProgramUmrahSpecialDto)
    return  createdPRUM.save();
  }

  async findAll() {
    return await this.ProgramUmrahSpecialModel.find();
  }

  async findOne(id: string) {
    return await this.ProgramUmrahSpecialModel.findOne({_id:id})
  }

 async update(id: string, updateProgramUmrahSpecialDto: UpdateProgramUmrahSpecialDto) {
   await this.ProgramUmrahSpecialModel.findByIdAndUpdate(id , updateProgramUmrahSpecialDto , {new:true});
  }

  async remove(id: string) {
    await this.ProgramUmrahSpecialModel.findByIdAndDelete(id);
  }
}
