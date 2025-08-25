import { Body, Controller, Post, Logger } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    
    @Post('login')
    signin(@Body() body: any) {
        Logger.log(body.EmailId);
        return `Hello, ${body.EmailId || 'World'}!`;
        // return this.authService.singin();
    }
}