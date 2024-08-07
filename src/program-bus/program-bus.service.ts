import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramBusDto } from './dto/create-program-bus.dto';
import { UpdateProgramBusDto } from './dto/update-program-bus.dto';
import { ProgramBus , ProgramBusDocument } from './entities/program-bus.entity';
import { BusCompanyDto , UpdateBusCompanyDto} from './dto/bus-company.dto';
import { busCompany , busCompanySchema , busCompanyDocument} from './entities/bus-company.schema';
import { Seat , SeatSchema } from './entities/seat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProgramUmrah , ProgramUmrahDocument } from 'src/program_umrah/entities/program_umrah.entity';


@Injectable()
export class ProgramBusService {
  constructor(@InjectModel( ProgramBus.name) private  readonly ProgramBusModel: Model< ProgramBusDocument>, 
    @InjectModel(ProgramUmrah.name) private readonly programUmrahModel: Model<ProgramUmrahDocument>,
    @InjectModel(busCompany.name) private readonly busCompanyModel: Model<busCompanyDocument>,
    ) {}
  async create(createProgramBusDto: CreateProgramBusDto) :Promise< ProgramBus > {
    const createdProgramBus = new this.ProgramBusModel(createProgramBusDto);
    return createdProgramBus.save();
  }
  async findProgramBusWithnameprogramUmrah(): Promise<ProgramBus[]>{
    return await this.ProgramBusModel.find().populate('id_ProgramUmrah','name_program').exec();
  }
 
async findRecordByIdProgramUmrah(id_ProgramUmrah: string) {

  const s = await this.ProgramBusModel.findOne({ id_ProgramUmrah }).exec();
  console.log(s);
  return s;
}
  async findById(id: string): Promise<ProgramBus> {
    return await this.ProgramBusModel.findById(id).exec();
  }
  async findAll() {
    return await this.ProgramBusModel.find();
  }

  async findOne(id) {
    return await this.ProgramBusModel.findOne({_id:id})
  }
  async findid(id) {
    return await this.ProgramBusModel.findById({_id:id})
  }
  async update(id: string, updateProgramBusDto: UpdateProgramBusDto) {
    await this.ProgramBusModel.findByIdAndUpdate (id ,updateProgramBusDto , {new : true});
  }
  async remove(id: string) {
   await this.ProgramBusModel.findByIdAndDelete(id);
  }
 
  async  reserveSeat(
    id_ProgramUmrah: string, number_bus: number, seatNumber: number ,name_passenger: string )
    {
      const seat = await this.ProgramBusModel.findOne({id_ProgramUmrah}).exec();
      console.log(seat);
      if (  seat.seat[seatNumber-1].isReserved) {
        throw new Error('Seat is already reserved');
      }
      console.log(seat.seat[seatNumber].isReserved);
    await this.ProgramBusModel.updateMany(
      { id_ProgramUmrah, 'seat.number_bus': number_bus, 'seat.seatNumber': seatNumber},
      { $set: { 'seat.$[seat].isReserved': true ,   'seat.$[seat].name_passenger': name_passenger } },
      { arrayFilters: [ { 'seat.number_bus': number_bus , 'seat.seatNumber': seatNumber}] }
    );
    }


  async getUmrahProgramName(programBusId: string): Promise<string> {
    const programBus = await this.ProgramBusModel
      .findById(programBusId)
      .populate('id_ProgramUmrah', 'name_program')
      .exec();

    if (!programBus) {
      throw new NotFoundException('ProgramBus not found');
    }
    return programBus.id_ProgramUmrah.name_program;
  }
  async getPassengersByProgramCompanyAndBus( id_ProgramUmrah: string, number_bus: number,
  ){
    const programBus = await this.ProgramBusModel
      .findOne({ id_ProgramUmrah })
      .populate({
        path: 'seat',
        match: { number_bus },
        select: 'name_passenger',
      })
      .exec();
    if (!programBus 
      // || !programBus.length
    ) {
      return [];
    }
    // const bus = programBus.busCompany[0];
    return programBus.seat.map((seat) => seat.name_passenger);
  }

async getAvailableSeatsByProgramCompanyAndBus( id_ProgramUmrah: string,  number_bus: number,
) {
  const programBus = await this.ProgramBusModel
    .findOne({ id_ProgramUmrah })
    .populate({
      path: 'seat',
      match: { number_bus , isReserved: false },
      select: 'seatNumber',
    })
    .exec();
console.log(programBus);
  if (!programBus 
    // || !programBus.length
  ) {
    return [];
  }


  const availableSeats = programBus.seat.filter((seat) => !seat.isReserved);
  return availableSeats.map((seat) => seat.seatNumber);
}

async cancelReservationByPassengerName(id_ProgramUmrah: string ,number_bus: number, seatNumber: number ,name_passenger: string): Promise<void> {
await this.ProgramBusModel.updateMany(
  {id_ProgramUmrah,  'seat.number_bus': number_bus ,'seat.seatNumber': seatNumber, 'seat.name_passenger': name_passenger},
  { $set: { 'seat.$[seat].isReserved':false ,  'seat.$[seat].name_passenger': null }  },
  { arrayFilters: [  { 'seat.number_bus': number_bus , 'seat.name_passenger': name_passenger }] }
);
}

async addBusWithSeats(id_ProgramUmrah: string, number_bus: number): Promise<void> {
  let programBus = await this.ProgramBusModel.findOne({ id_ProgramUmrah }).exec();

  if (!programBus) {
    programBus = new this.ProgramBusModel({
      id_ProgramUmrah,
      count_bus: 1,
      seat: [],
    });
    const seatArray = [];
    for (let i = 1; i <= 30; i++) {
      seatArray.push({
        number_bus: number_bus,
        seatNumber: i,
        name_passenger: null,
        isReserved: false,
      });
    }
    programBus.seat.push(...seatArray);
    try {
      await programBus.save();
    } catch (error) {
      throw new Error(`Failed to create Program Bus: ${error.message}`);
    }
  } else {
    if (programBus.count_bus == number_bus) {
      throw new Error(`Bus with number ${number_bus} already exists`);
    } else {
      programBus.count_bus = number_bus;

      const seatArray = [];
      for (let i = 1; i <= 30; i++) {
        seatArray.push({
          number_bus: number_bus,
          seatNumber: i,
          name_passenger: null,
          isReserved: false,
        });
      }
      programBus.seat.push(...seatArray);

      try {
        await programBus.save();
      } catch (error) {
        throw new Error(`Failed to save Program Bus: ${error.message}`);
      }
    }
  }
}
async deleteSeatsByNumber(id_ProgramUmrah: string, number: number) {
  const program = await this.ProgramBusModel.findOne({ id_ProgramUmrah });

  if (program.count_bus == 0) {
    throw new Error('count_bus value is less than 0');
  }

  await this.ProgramBusModel.updateOne(
    { id_ProgramUmrah },
    { $pull: { seat: { number_bus: number } } , $inc: { count_bus:-1 }}
  )

 
  } 

}



 
  
  
