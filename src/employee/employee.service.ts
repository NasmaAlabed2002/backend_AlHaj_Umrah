import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Employee , EmployeeDocument  } from './entities/employee.entity';
import { Office , OfficeDocument } from 'src/office/entities/office.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

@Injectable()

export class EmployeeService {
  constructor(@InjectModel( Employee.name) private  EmployeeModel: Model< EmployeeDocument> , 
  @InjectModel(Office.name) private officeModel: Model<OfficeDocument>,
) {}
 async create(createEmployeeDto: CreateEmployeeDto) : Promise< Employee>{
  const createdEmploye  = new this.EmployeeModel(createEmployeeDto)
  return createdEmploye.save();
  }

  async findEmployeesWithOfficeInfo(): Promise<Employee[]> {
    return this.EmployeeModel.find().populate('id_office' , 'name').exec();
  }

  
  async findAll() {
    return await this.EmployeeModel.find();
  }

 async findOne(id: string) {
    return await this.EmployeeModel.findOne({_id:id});
  }

  async update(id: string , updateEmployeeDto: UpdateEmployeeDto) {
    await this.EmployeeModel.findByIdAndUpdate(id , updateEmployeeDto , {new : true})
    
  }

  async remove(id: string) {
    await this.EmployeeModel.findByIdAndDelete(id);
  }

  async getAllEmployeesWithOfficeName(): Promise<Employee[]> {
    const result = await this.EmployeeModel.aggregate([
      {
        $lookup: {
          from: 'Office',
          localField: 'id_office',
          foreignField: '_id',
          as: 'OfficeDocument'
        }
      },
      {
        $unwind: '$officeName'
      },
      {
        $project: {
          _id: 0,
     
          firstname: 1,
          lastname: 1,
          birth: 1,
          specialty: 1,
          mobile: 1,
          email: 1,
          Educational_attainment: 1,
          address: 1,
          dateEmployee: 1,
          officeName: "$Office.name"
        }
      }
    ]);

    return result;
  }
}
