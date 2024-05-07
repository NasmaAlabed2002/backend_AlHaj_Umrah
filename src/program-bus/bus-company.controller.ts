import { Controller, Get, Post, Body, Patch, Param, Delete , UseInterceptors, UploadedFile,} from '@nestjs/common';
import { BusCompanyService} from './program-bus.service';
import { BusCompanyDto , UpdateBusCompanyDto } from './dto/bus-company.dto';
import { ApiOperation, ApiResponse, ApiBody, ApiConsumes,  ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { busCompany } from './entities/bus-company.schema';


export class BusCompanyController {
    constructor(private readonly busCompanyService: BusCompanyService) {}
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
    @Get('allBusCompany')
    // @ApiOperation({ summary: 'Get all BusCompany'})
    @ApiResponse({ status: 200, description: 'OK'})
    async getAllBusCompanies(): Promise<busCompany[]> {
      return this.busCompanyService.findAllBusCompanies();
    }
    @Patch(':id/update BusCompany')
    @ApiOperation({ summary: 'update BusCompany' })
    updateBusCompanie(@Param('id') id: string, @Body() udateBusCompanyDto: UpdateBusCompanyDto) {
      return this.busCompanyService.updateBusCompanie(id, udateBusCompanyDto);
    }
  
    @Delete(':id/delete BusCompany')
    @ApiOperation({ summary: 'delete BusCompany' })
    reremoveBusCompaniemove(@Param('id') id: string) {
      return this.busCompanyService.removeBusCompanie(id);
    }
  }