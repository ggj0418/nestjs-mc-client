import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AccoSvcModule } from './acco-svc/acco-svc.module';

@Module({
  imports: [UserModule, AccoSvcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
