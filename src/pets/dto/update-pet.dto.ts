import { PartialType } from '@nestjs/swagger';
import { CreatePetDto } from './create-pet.dto';
import { IsString, IsInt, IsPositive } from "class-validator"


export class UpdatePetDto extends PartialType(CreatePetDto) {
    @IsString()
    name: string
    @IsString()
    type: string
    @IsInt()
    @IsPositive()
    age: number
    @IsInt()
    @IsPositive()
    price: number
}
