import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelRoomService } from './hotel-room.service';
import { CreateHotelRoomDto } from './dto/create-hotel-room.dto';
import { UpdateHotelRoomDto } from './dto/update-hotel-room.dto';
import { ApiQuery } from "@nestjs/swagger";
import { Query } from "@nestjs/common";
import { Room } from './rooms.model'; 
//@ApiTags('hotel')
@Controller('hotel-room')
export class HotelRoomController {
  constructor(private readonly hotelRoomService: HotelRoomService) {}
  

  
  // @Post('room')
  // @ApiQuery({ name: 'type', enum: Room })
  // async filterByRole(@Query('type') type = Room.single) {}
  

  @Post()
  create(@Body() createHotelRoomDto: CreateHotelRoomDto) {
    return this.hotelRoomService.create(createHotelRoomDto);
  }

  @Get()
  findAll() {
    return this.hotelRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelRoomService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelRoomDto: UpdateHotelRoomDto) {
    return this.hotelRoomService.update(id, updateHotelRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelRoomService.remove(id);
  }
}
