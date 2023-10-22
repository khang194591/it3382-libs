import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtModule, JwtService } from "@nestjs/jwt";

import { JwtAuthMiddleware } from "./jwt.middleware";

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [JwtService],
  exports: [JwtAuthMiddleware],
})
export class AuthModule {}
