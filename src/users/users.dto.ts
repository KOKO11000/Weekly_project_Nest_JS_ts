import { IsNotEmpty, IsString } from "class-validator"

export class UserDto 
{

    @IsString()
    @IsNotEmpty()
    username:string
    password:string
    role:string
}