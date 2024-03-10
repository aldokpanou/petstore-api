import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor (private prisma:PrismaService, private jwtService: JwtService){}

    async login(email:string, password:string){

        // Etape1 : Récuperer l'utilisatetur avec son mail
        const user = await this.prisma.users.findUnique({
            where:{email: email}
        })

        if(!email){
            throw new NotFoundException('Email cant be null')
        }

        // Si l'utilisateur n'est pas trouvé throw errror 
        if(!user){
            throw new NotFoundException('No user find for email: ${email}')
        }

        // Etape2 : Verifier si le mdp est correct
        const isvalidPassword = await bcrypt.compareSync(password,user.password)

        // Si le mot de passe ne match pas  throw errror 
        if (!isvalidPassword) {
            throw new UnauthorizedException('Invalid password')
        }

        // Etape 3 : Generer un JWT qui contient l'id de l'utilisateur et le rtourner

        const payload = {
            id: user.id,
            email: user.email
        }

        return{
            accessToken: await this.jwtService.signAsync(payload)
        }
    }
}
