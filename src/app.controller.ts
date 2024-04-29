import { Controller, Get , Post} from '@nestjs/common';
import { AppService } from './app.service';
import { CloudinaryService } from './cloudinary/clodinary.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
