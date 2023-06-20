import { Controller, Get } from '@nestjs/common';
import { IUser } from 'src/interfaces/users';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAllUsers(): Promise<IUser[]> {
    return this.usersService.getAllUser();
  }
}
