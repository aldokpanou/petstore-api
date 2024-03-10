import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor (private prisma: PrismaService){}

  async create(data: Prisma.UsersCreateInput) {
    // const {email, password} = data

    const hashedPasword = await bcrypt.hash(data.password,10)
    data.password = hashedPasword
    return await this.prisma.users.create({
      data
    })
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(email: string) {
    return await this.prisma.users.findUnique({
      where:{
         email
      }
    })
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
