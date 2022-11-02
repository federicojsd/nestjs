import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class AdminGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
        if(!request.currentUser){
            return false;
        }
        //Returns true if admin is true or false if admin is false
        return request.currentUser.admin;
    }
}