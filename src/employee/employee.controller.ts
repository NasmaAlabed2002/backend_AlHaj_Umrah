import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee } from './entities/employee.entity';
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get(':/WithOfficeInfo')
  async getEmployeesWithOfficeInfo() {
    return this.employeeService.findEmployeesWithOfficeInfo();
  }

  @Get()
  findAll() {
    return this.employeeService.findAll();
  }
  @Get(':/all employees')
  @ApiOperation({ summary: 'Get all employees with office names' })
  @ApiResponse({ status: 200, description: 'OK', type: [Employee] })
  async getAllEmployeesWithOfficeName() {
    return this.employeeService.getAllEmployeesWithOfficeName();
  }
  // // async getAllEmployeesWithOfficeName(): Promise<Employee[]> {
  // //   return this.employeeService.getAllEmployeesWithOfficeName();
  
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.employeeService.findOne(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeService.update(id, updateEmployeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employeeService.remove(id);
  }
}
