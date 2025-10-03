import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // get http layer and Request and Response methods from Express
    const response = ctx.getResponse<Response>();

    response.status(exception.getStatus()).json({ error: exception.message });
  }
}
/*
  apply at controller level 

  @Controller('test')
  @UseFilters(SimpleExceptionFilter)
  export class TestController {
    @Get()
    getData() {
      throw new ForbiddenException('Access denied');
    } 
  }
*/