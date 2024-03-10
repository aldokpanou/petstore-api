import { IsString, IsInt, IsPositive } from "class-validator"

export class CreatePetDto {

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
