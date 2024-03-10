import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma} from '@prisma/client';


@Injectable()
export class PetsService {
  constructor (private prisma: PrismaService){}

  create(data: Prisma.PetsCreateInput) {
    const pets = this.prisma.pets.create({
      data
    })
    return pets
  }

  findAll() {
    return this.prisma.pets.findMany()
  }

   findOne(id: string) {
    const data =  this.prisma.pets.findUnique({
      where: {
        id
      }
    })
    return data
  }

  update(id: string, updateData: Prisma.PetsCreateInput) {
    return this.prisma.pets.update({
      where: {
        id
      },
      data: updateData
    });
  }

  async remove(id: string) {
    await this.prisma.pets.delete({
      where: {
        id
      }
    })
  }
}
