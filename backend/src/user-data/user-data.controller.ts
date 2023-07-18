import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Patch,
} from '@nestjs/common';

import { UserData, Prisma } from '@prisma/client';

import { UserDataService } from './user-data.service';

@Controller('user-data')
export class UserDataController {
  constructor(private readonly userDataService: UserDataService) {}

  @Get()
  async getUserData(): Promise<UserData[]> {
    return this.userDataService.getUserData();
  }

  @Get(':id')
  async getUserDataById(@Param('id') id: string): Promise<UserData | null> {
    return this.userDataService.getUserDataById(id);
  }

  @Post()
  async createUserData(
    @Body() data: Prisma.UserDataUncheckedCreateInput,
  ): Promise<UserData> {
    return this.userDataService.createUserData(data);
  }

  @Patch(':id')
  async updateUserData(
    @Param('id') id: string,
    @Body() data: Prisma.UserDataUncheckedUpdateInput,
  ): Promise<UserData> {
    return this.userDataService.updateUserData(id, data);
  }

  @Post('mark-as-labelled')
  async markAsLabelled(
    @Body() data: { answer: string; userId: string; dataId: string },
  ): Promise<UserData> {
    return this.userDataService.markAsLabelled(
      data.answer,
      data.userId,
      data.dataId,
    );
  }

  @Delete(':id')
  async deleteUserData(@Param('id') id: string): Promise<UserData> {
    return this.userDataService.deleteUserData(id);
  }
}
