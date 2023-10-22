import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { IAuthenticatedRequest } from "./auth.request";

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    const request = context.switchToHttp().getRequest<IAuthenticatedRequest>();
    const { userId } = request;

    if (!userId) throw new UnauthorizedException();

    return true;
  }
}
