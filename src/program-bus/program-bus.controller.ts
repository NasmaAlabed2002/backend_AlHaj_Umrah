import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProgramBusService } from './program-bus.service';
import { CreateProgramBusDto } from './dto/create-program-bus.dto';
import { UpdateProgramBusDto } from './dto/update-program-bus.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProgramBus } from './entities/program-bus.entity';
@Controller('program-bus')
export class ProgramBusController {
  constructor(private readonly programBusService: ProgramBusService) {}

  @Post()
  create(@Body() createProgramBusDto: CreateProgramBusDto) {
    return this.programBusService.create(createProgramBusDto);
  }

  @Get('findAll')
  findAll() {
    return this.programBusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.programBusService.findOne(id);
  }
  @Get('buscompany')
  async getAllBusCompanies() {
    return await this.programBusService.getAllBusCompanies();
  }
  @Get()
  @ApiOperation({ summary: 'Get all ProgramBus with ProgramUmrah name' })
  @ApiResponse({ status: 200, description: 'OK'})
  async getProgramBusWithnameprogramUmrah() {
    return this.programBusService.findProgramBusWithnameprogramUmrah();
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
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.programBusService.remove(id);
  }
}
