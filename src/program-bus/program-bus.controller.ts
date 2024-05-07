import { Controller, Get, Post, Body, Patch, Param, Delete , UseInterceptors, UploadedFile,} from '@nestjs/common';
import { ProgramBusService  } from './program-bus.service';
import { BusCompanyService } from './bus-company.service';
import { CreateProgramBusDto } from './dto/create-program-bus.dto';
import { UpdateProgramBusDto } from './dto/update-program-bus.dto';
import { BusCompanyDto  } from './dto/bus-company.dto';
import { UpdateBusCompanyDto } from './dto/update-bus-company.dto';
import { ApiOperation, ApiResponse, ApiBody, ApiConsumes,  ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProgramBus } from './entities/program-bus.entity';
import { busCompany } from './entities/bus-company.schema';

@Controller('program-bus')
export class ProgramBusController {
  constructor(private readonly programBusService: ProgramBusService , private readonly  busCompanyService: BusCompanyService) {}


  @Post()
  create(@Body() createProgramBusDto: CreateProgramBusDto) {
    return this.programBusService.create(createProgramBusDto);
  }
 
  @Post('buscompany')
  @UseInterceptors(FileInterceptor('buscompany'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {

        name_company: { type: 'string' },
        Services: {type: 'array', items: { type: 'string' }  },
        goals_company: {type: 'array', items: { type: 'string' }  },
        urlImageCompany: { type: 'URL' },
        urlImage : {type: 'array', items: { type: 'string' } },
        link: { type: 'URL' },
        type_bus: { type: 'string' },
        price_tecket: { type: 'string' },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'successfully!' })
  async createBusCompany(
    @UploadedFile() 
    @Body() busCompanyDto: BusCompanyDto,
  ) {
    const { name_company,  Services, goals_company , urlImageCompany , urlImage,link, type_bus , price_tecket } = busCompanyDto;
    return this.busCompanyService.createBusCompany(name_company,  Services, goals_company , urlImageCompany , urlImage,link, type_bus , price_tecket);
  }
  //////////////////////////////////
  @Get('findAll')
  findAll() {
    return this.programBusService.findAll();
  }
  @Get('all-ProgramBus-with-ProgramUmrah')
  @ApiOperation({ summary: 'Get all ProgramBus with ProgramUmrah name ' })
  @ApiResponse({ status: 200, description: 'OK'})
  async findProgramBusWithnameprogramUmrah(): Promise<ProgramBus[]> {
    return this.programBusService.findProgramBusWithnameprogramUmrah();
  }

  @Get('allBusCompany')
  // @ApiOperation({ summary: 'Get all BusCompany'})
  @ApiResponse({ status: 200, description: 'OK'})
  async getAllBusCompanies(): Promise<busCompany[]> {
    return this.busCompanyService.findAllBusCompanies();
  }

  ////////////////////////////////////////////////////
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programBusService.findOne(id);
  }
  @Get(':id_ProgramUmrah/:name_company/:number_bus/passengers')
  async getPassengersByBus(
    @Param('id_ProgramUmrah') id_ProgramUmrah: string,
     @Param('name_company') name_company: string, 
     @Param('number_bus') number_bus: number) {
    return this.programBusService.getPassengersByProgramCompanyAndBus(id_ProgramUmrah, name_company, number_bus);
  }
  @Get(':id_ProgramUmrah/:name_company/:number_bus/available-seats')
  async getAvailableSeats(
   @Param('id_ProgramUmrah') id_ProgramUmrah: string,
   @Param('name_company') name_company: string, 
   @Param('number_bus') number_bus: number) {
    return this.programBusService.getAvailableSeatsByProgramCompanyAndBus(id_ProgramUmrah, name_company, number_bus);
  }


  ////////////////////////////////////////////////////////////////

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProgramBusDto: UpdateProgramBusDto) {
    return this.programBusService.update(id, updateProgramBusDto);
  }
  @Patch(':id/reserve-seat/:name_company/:number_bus/:seatNumber/:name_passenger')
  async reserveSeat(
    @Param('id_ProgramUmrah') id: string,
    @Param('name_company') name_company: string,
    @Param('number_bus') number_bus: number,
    @Param('seatNumber') seatNumber: number,
    @Param('name_passenger') name_passenger: string,
  ) {
    return this.programBusService.reserveSeat(id, name_company, number_bus, seatNumber , name_passenger);
  }
  @Patch(':id/cancel-reservation/:name_company/:number_bus/:name_passenger')
  async cancelReservationByPassengerName(
    @Param('id_ProgramUmrah') id: string,
    @Param('name_company') name_company: string,
    @Param('number_bus') number_bus: number,
    @Param('name_passenger') name_passenger: string,
  ) {
    await this.programBusService.cancelReservationByPassengerName(id, name_company,number_bus, name_passenger);
  }
  @Patch(':id/update BusCompany')
  @ApiOperation({ summary: 'update BusCompany' })
  updateBusCompanie(@Param('id') id: string, @Body() udateBusCompanyDto: UpdateBusCompanyDto) {
    return this.busCompanyService.updateBusCompanie(id, udateBusCompanyDto);
  }

 

  ////////////////////////////////////////////////////////////////////////
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programBusService.remove(id);
  }
  @Delete(':id/delete BusCompany')
  @ApiOperation({ summary: 'delete BusCompany' })
  reremoveBusCompaniemove(@Param('id') id: string) {
    return this.busCompanyService.removeBusCompanie(id);
  }
    // constructor(private readonly ) {}
}
//bus-company.dto