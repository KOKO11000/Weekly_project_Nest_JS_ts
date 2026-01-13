import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Role } from "./role.enum";
import { ROLES_KEY } from "../roles/roles.decoretor";

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass()
        ])
        if (!requiredRoles) {
            return true
        }
        const request = context.switchToHttp().getRequest()
        // console.log("request", request);
        
        const { user } = request
        console.log(user);
        
        if (!user || !user.roles) {
            return false
        }
        return requiredRoles.some((role) => user.roles?.includes(role))

    }
}