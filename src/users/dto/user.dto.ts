import { Type } from 'class-transformer';
import {
  IsEmail,
  IsIn,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  MaxDate,
  ValidateIf,
} from 'class-validator';
export class LoginDto {
  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}

export class SignupDto {
  name: string;
  username: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    { message: 'not strong' },
  )
  password: string;

  // @Equals('password', { message: 'doesnot match' })

  @ValidateIf((o) => o.password !== o.cnfpassword)
  @IsIn([0], {
    message: 'Passwords do not match', //  wont break due to password constraints
  })
  cnfpassword: string;

  @Type(() => Date)
  @MaxDate(() => new Date(), { message: 'date should be less than today' })
  DOJ: Date;
}

/*
/signup
name, username, password, email, cnfpassword, DOJ,

validations
- email
- password
- confirm password
- doj - date, not > current
*/
