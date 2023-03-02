import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const accoGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.ACCO_GRPC_URL,
    package: 'acco',
    protoPath: join(__dirname, './acco.proto'),
    loader: {
      keepCase: true,
      json: true,
      enums: String,
      objects: true,
      arrays: true,
    },
  },
};
