import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto/user.dto';
import z from 'zod';
import { signupSchema } from './schema/signup-schema';

@Controller('users')
export class UsersController {

  @Post('/login')
  login(@Body() user:LoginDto ) {
    console.log(user.email,user.password)
  }

  @Post('/signup')
  signup(@Body() user: SignupDto) {
    signupSchema.parse(user);
    console.log(user)
  }
}
