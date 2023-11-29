import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, userCredDTO } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return 'I am a user';
  }

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO){
    return this.userService.createUser(createUserDTO);
  }
  

  @Post('login')
  userLogin(@Body() userCredential: userCredDTO): any {
    return this.userService.userAuth(userCredential);
  }

  @Get(':email')
  async getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

}
