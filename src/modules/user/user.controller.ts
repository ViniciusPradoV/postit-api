import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  appService: any;
    
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
