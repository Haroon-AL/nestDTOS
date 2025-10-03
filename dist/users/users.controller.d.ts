import { LoginDto, SignupDto } from './dto/user.dto';
export declare class UsersController {
    login(user: LoginDto): void;
    signup(user: SignupDto): void;
}
