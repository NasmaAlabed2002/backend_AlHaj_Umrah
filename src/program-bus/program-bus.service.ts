import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProgramBusDto } from './dto/create-program-bus.dto';
import { UpdateProgramBusDto } from './dto/update-program-bus.dto';
import { ProgramBus , ProgramBusDocument } from './entities/program-bus.entity';
import { busCompany , busCompanySchema } from './entities/bus-company.schema';
import { Seat , SeatSchema } from './entities/seat.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProgramUmrah , ProgramUmrahDocument } from 'src/program_umrah/entities/program_umrah.entity';

@Injectable()
export class ProgramBusService {
  constructor(@InjectModel( ProgramBus.name) private  readonly ProgramBusModel: Model< ProgramBus>, 
    @InjectModel(ProgramUmrah.name) private readonly programUmrahModel: Model<ProgramUmrah>,
    ) {}
  async create(createProgramBusDto: CreateProgramBusDto) :Promise< ProgramBus > {
    const createdProgramBus = new this.ProgramBusModel(createProgramBusDto);
    return createdProgramBus.save();
  }
  async findProgramBusWithnameprogramUmrah(): Promise<ProgramBus[]>{
    return await this.ProgramBusModel.find().populate('id_ProgramUmrah','name_program').exec();
  }
  async getAllBusCompanies() {
    return await this.ProgramBusModel.find({}, { buscompany: 1 });
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

  async reserveSeat(id: string, name_company: string, number_bus: number, seatNumber: number , name_passenger: string): Promise<void> {
    await this.ProgramBusModel.updateMany(
      { id, 'busCompany.name_company': name_company, 'busCompany.seat.number_bus': number_bus, 'busCompany.seat.seatNumber': seatNumber},
      { $set: { 'busCompany.$[busCompany].seat.$[seat].isReserved': true ,  'busCompany.$[busCompany].seat.$[seat].name_passenger': name_passenger } },
      { arrayFilters: [{ 'busCompany.name_company': name_company  }, { 'seat.number_bus': number_bus , 'seat.seatNumber': seatNumber}] }
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
////////////////////////////////
  async getPassengersByProgramCompanyAndBus( id_ProgramUmrah: string, name_company: string, number_bus: number,
  ){
    const programBus = await this.ProgramBusModel
      .findOne({ id_ProgramUmrah })
      .populate({
        path: 'busCompany',
        match: { name_company},
        select: '_id',
        populate: {
          path: 'seat',
          match: { number_bus },
          select: 'name_passenger',
        },
      })
      .exec();
    if (!programBus || !programBus.busCompany.length) {
      return [];
    }
    const bus = programBus.busCompany[0];
    return bus.seat.map((seat) => seat.name_passenger);
  }
//////////////////////////////////
async getAvailableSeatsByProgramCompanyAndBus( id_ProgramUmrah: string, name_company: string, number_bus: number,
) {
  const programBus = await this.ProgramBusModel
    .findOne({ id_ProgramUmrah })
    .populate({
      path: 'busCompany',
      match: { name_company },
      select: '_id',
      populate: {
        path: 'seat',
        match: { number_bus , isReserved: false },
        select: 'seatNumber',
      },
    })
    .exec();

  if (!programBus || !programBus.busCompany.length) {
    return [];
  }

  const bus = programBus.busCompany[0];
  const availableSeats = bus.seat.filter((seat) => !seat.isReserved);
  return availableSeats.map((seat) => seat.seatNumber);
}
/////////////////////////////////

async cancelReservationByPassengerName(id: string, name_company: string, number_bus: number,  name_passenger: string): Promise<void> {
await this.ProgramBusModel.updateMany(
  { id, 'busCompany.name_company': name_company, 'busCompany.seat.number_bus': number_bus , 'busCompany.seat.name_passenger': name_passenger},
  { $set: { 'busCompany.$[busCompany].seat.$[seat].isReserved': false ,  'busCompany.$[busCompany].seat.$[seat].name_passenger': null } },
  { arrayFilters: [{ 'busCompany.name_company': name_company },  { 'seat.number_bus': number_bus , 'seat.name_passenger': name_passenger }] }
);
}
///طريقة اخرى لالغاء الحجز 
//   const programBus = await this.ProgramBusModel
//     .findOne({ id })
//     .populate({
//       path: 'busCompany',
//       match: { name_company, number_bus },
//       populate: {
//         path: 'seat',
//         match: { name_passenger },
//       },
//     })
//     .exec();

//   if (!programBus || !programBus.busCompany.length) {
//     throw new NotFoundException('Program bus not found.');
//   }

//   const bus = programBus.busCompany[0];
//   const seatsToUpdate = bus.seat.filter((seat) => seat.name_passenger === name_passenger);

//   if (seatsToUpdate.length === 0) {
//     throw new NotFoundException('Passenger not found in the bus seats.');
//   }

//   seatsToUpdate.forEach((seat) => {
//     seat.isReserved = false;
//     seat.name_passenger = null;
//   });

//   await programBus.save();
// }
}

 
  
  
