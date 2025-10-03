import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, SignupDto } from './dto/user.dto';

@Controller('users')
export class UsersController {

  @Post('/login')
  login(@Body() user:LoginDto ) {
    console.log(user.email,user.password)
  }

  @Post('/signup')
  signup(@Body() user: SignupDto) {
    console.log(user)
  }
}
