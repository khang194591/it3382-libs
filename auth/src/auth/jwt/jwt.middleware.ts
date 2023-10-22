import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response } from "express";

import { JwtService } from "@nestjs/jwt";
import { IAuthenticatedRequest } from "../auth.request";

@Injectable()
export class JwtAuthMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}

  use(req: IAuthenticatedRequest, res: Response, next: NextFunction): void {
    const token = req.headers.get("authorization");
    if (token) {
      this.jwtService
        .verify(token)
        .then((decodedToken: { uid: string }) => {
          if (decodedToken) {
            req.userId = decodedToken.uid;
          }
        })
        .finally(() => {
          next();
        });
    } else {
      next();
    }
  }
}
