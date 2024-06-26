import { Controller, Get, Post, Body, Patch, Param, Delete , UseInterceptors, UploadedFile,} from '@nestjs/common';
import { BusCompanyService } from './bus-company.service';
import { BusCompanyDto , UpdateBusCompanyDto } from './dto/bus-company.dto';
import { ApiOperation, ApiResponse, ApiBody, ApiConsumes,  ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { busCompany } from './entities/bus-company.schema';

@Controller ('BusCompany')
export class BusCompanyController {
    constructor(private readonly busCompanyService: BusCompanyService) {}
    @Post()
    create(@Body() busCompanyDto: BusCompanyDto) {
        return this.busCompanyService.createBusCompany(busCompanyDto);
      }
    // @UseInterceptors(FileInterceptor('buscompany'))
    // @ApiConsumes('multipart/form-data')
    // @ApiBody({
    //   schema: {
    //     type: 'object',
    //     properties: {
  
    //       name_company: { type: 'string' },
    //       Services: {type: 'array', items: { type: 'string' }  },
    //       goals_company: {type: 'array', items: { type: 'string' }  },
    //       urlImageCompany: { type: 'URL' },
    //       urlImage : {type: 'array', items: { type: 'string' } },
    //       link: { type: 'URL' },
    //       type_bus: { type: 'string' },
    //       price_tecket: { type: 'string' },
    //     },
    //   },
    // })
    // @ApiResponse({ status: 201, description: 'successfully!' })
    // async createBusCompany(
    //   @UploadedFile() 
    //   @Body() busCompanyDto: BusCompanyDto,
    // ) {
    //   const { name_company,  Services, goals_company , urlImageCompany , urlImage,link, type_bus , price_tecket } = busCompanyDto;
    //   return this.busCompanyService.createBusCompany(name_company,  Services, goals_company , urlImageCompany , urlImage,link, type_bus , price_tecket);
    // }
    @Get()
    // @ApiOperation({ summary: 'Get all BusCompany'})
    @ApiResponse({ status: 200, description: 'OK'})
    async getAllBusCompanies(): Promise<busCompany[]> {
      return this.busCompanyService.findAllBusCompanies();
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.busCompanyService.findOne(id);
    }
    @Get(':name')
    async getCompanyIdByName(@Param('name') name: string): Promise<string> {
      const companyId = await this.busCompanyService.getCompanyIdByName(name);
      return companyId;
    }
    @Patch(':id')
    @ApiOperation({ summary: 'update BusCompany' })
    updateBusCompanie(@Param('id') id: string, @Body() udateBusCompanyDto: UpdateBusCompanyDto) {
      return this.busCompanyService.updateBusCompanie(id, udateBusCompanyDto);
    }
  
    @Delete(':id')
    @ApiOperation({ summary: 'delete BusCompany' })
    reremoveBusCompaniemove(@Param('id') id: string) {
      return this.busCompanyService.removeBusCompanie(id);
    }
  }