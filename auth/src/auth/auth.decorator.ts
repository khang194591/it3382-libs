import { createParamDecorator } from "@nestjs/common";

import { AuthData } from "./auth.data";
import { IAuthenticatedRequest } from "./auth.request";

export const Auth = createParamDecorator(
  (data: any, req: IAuthenticatedRequest): AuthData => {
    return new AuthData(req.userId);
  }
);
