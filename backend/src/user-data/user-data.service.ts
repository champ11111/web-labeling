import { Injectable } from '@nestjs/common';

import { UserData, Prisma } from '@prisma/client';

import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class UserDataService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserData(): Promise<UserData[]> {
    return this.prisma.userData.findMany();
  }

  async getUserDataById(id: string): Promise<UserData | null> {
    return this.prisma.userData.findUnique({ where: { id } });
  }

  async createUserData(
    data: Prisma.UserDataUncheckedCreateInput,
  ): Promise<UserData> {
    return this.prisma.userData.create({ data });
  }

  async updateUserData(
    id: string,
    data: Prisma.UserDataUncheckedUpdateInput,
  ): Promise<UserData> {
    return this.prisma.userData.update({ where: { id }, data });
  }

  async deleteUserData(id: string): Promise<UserData> {
    return this.prisma.userData.delete({ where: { id } });
  }

  async markAsLabelled(id: string): Promise<UserData> {
    return this.prisma.userData.update({
      where: { id },
      data: { isLabelled: true },
    });
  }
}
