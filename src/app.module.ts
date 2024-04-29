import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelRoomModule } from './hotel-room/hotel-room.module';
import { ProgramBusModule } from './program-bus/program-bus.module';
import { HotelModule } from './hotel/hotel.module';
import { OfficeModule } from './office/office.module';
import { EmployeeModule } from './employee/employee.module';
import { AlHajjModule } from './al_hajj/al_hajj.module';
import { AlMutamirModule } from './al_mutamir/al_mutamir.module';
import { ProgramUmrahModule } from './program_umrah/program_umrah.module';
import { ProgramAlHajModule } from './program_al-haj/program_al-haj.module';
import { ProgUmrahAirlineModule } from './prog_umrah_airline/prog_umrah_airline.module';
import { ProgHajAirlineModule } from './prog_haj_airline/prog_haj_airline.module';
import { ProgUmrahHotelModule } from './prog_umrah_hotel/prog_umrah_hotel.module';
import { ProgAlHajHotelModule } from './prog_al-haj_hotel/prog_al-haj_hotel.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { CloudinaryProvider } from './cloudinary/cloudinary';
import { ProgramUmrahSpecialModule } from './program_umrah_special/program_umrah_special.module';



@Module({
  imports: [

    MongooseModule.forRoot('mongodb+srv://NasmaAlAbed:GIKGHxRgWrd1J1uY@cluster0.nolvplt.mongodb.net/all-data?retryWrites=true&w=majority'),  HotelModule, HotelRoomModule, ProgramBusModule, OfficeModule, EmployeeModule, AlHajjModule, AlMutamirModule, ProgramUmrahModule, ProgramAlHajModule, ProgUmrahAirlineModule,
     ProgHajAirlineModule, ProgUmrahHotelModule, ProgAlHajHotelModule, CloudinaryModule, ProgramUmrahSpecialModule ],


})
export class AppModule { }
