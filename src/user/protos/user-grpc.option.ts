import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const userGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.USER_GRPC_URL,
    package: 'user',
    protoPath: join(__dirname, './user.proto'),
    loader: {
      keepCase: true,
      json: true,
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
