import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../roles.enum'; // Import the UserRole enum

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);