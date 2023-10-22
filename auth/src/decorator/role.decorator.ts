import { CustomDecorator, SetMetadata } from "@nestjs/common";

export const RoleKeyMetadata = "roles";

export enum AppRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

export const Roles = (...roles: AppRole[]): CustomDecorator =>
  SetMetadata(RoleKeyMetadata, roles);

export const AnonymousKeyMetadata = "ANONYMOUS";

export const AnonymousEndpoint = SetMetadata(AnonymousKeyMetadata, true);
