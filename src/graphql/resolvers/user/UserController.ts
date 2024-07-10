import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './userService';
import { User } from '../../models/User';
import { UserInput } from '../../utils/createUserInput';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/get-all-users')
  async getAllUsers(): Promise<User[]> {
    try {
      return await this.userService.getAllUsers();
    } catch (error) {
      throw error;
    }
  }

  @Post('/create-user')
  async createUser(@Body() data: UserInput): Promise<User> {
    try {
      return await this.userService.createUser(data);
    } catch (error) {
      console.log;
      throw error;
    }
  }
}
