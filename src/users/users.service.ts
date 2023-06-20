import { Injectable } from '@nestjs/common';
import { listUser } from 'src/data/users';
import { IUser } from 'src/interfaces/users';

@Injectable()
export class UsersService {
  async getAllUser(): Promise<IUser[]> {
    return await Promise.resolve(listUser);
  }
}
