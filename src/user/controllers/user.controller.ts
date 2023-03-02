import { Controller } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { GrpcMethod } from '@nestjs/microservices';
import { GetUserResponse } from '../dto/get-user-response.interface';
import { GetUserRequest } from '../dto/get-user-request.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('UserService', 'GetUser')
  async create(data: GetUserRequest): Promise<GetUserResponse> {
    return this.userService.create(data);
  }
}
