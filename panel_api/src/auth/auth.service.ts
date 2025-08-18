import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{


    singin(){
        return {res: 'bien'};
    }
}