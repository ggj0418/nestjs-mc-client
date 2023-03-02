import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { userGrpcClientOptions } from './user/protos/user-grpc.option';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.connectMicroservice(userGrpcClientOptions);
  await app.startAllMicroservices();
}
bootstrap();
