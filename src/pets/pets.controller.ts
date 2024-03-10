import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PetsService } from './pets.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard  } from "src/auth/auth.guard";

@ApiTags('pets')
@Controller('pets')
export class PetsController {
  constructor(private readonly petsService: PetsService) {}

  @ApiOperation({ summary: 'Ajouter des chiens', description: 'Retrieves a list of all pets.' })
  @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petsService.create(createPetDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  findAll() {
    return this.petsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petsService.update(id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petsService.remove(id);
  }
}
