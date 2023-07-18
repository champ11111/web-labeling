import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';
import { User, Prisma, Data } from '@prisma/client';

import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(id);
  }

  @Get('/labelled-data/:username')
  async getLabelledDataByUsername(
    @Param('username') username: string,
  ): Promise<Data[]> {
    return this.userService.getLabelledDataByUsername(username);
  }

  @Get('/non-labelled-data/:username')
  async getNonLabelledDataByUsername(
    @Param('username') username: string,
  ): Promise<Data[]> {
    return this.userService.getNonLabelledDataByUsername(username);
  }

  // @Post()
  // async createUser(@Body() data: Prisma.UserCreateInput): Promise<User> {
  //   return this.userService.createUser(data);
  // }

  @Patch(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() data: Prisma.UserUpdateInput,
  ): Promise<User> {
    return this.userService.updateUser(id, data);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
