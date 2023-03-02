import { Global, Module } from '@nestjs/common';
import { AccoSvcService } from './services/acco-svc.service';
import { AccoSvcController } from './controllers/acco-svc.controller';

@Global()
@Module({
  controllers: [AccoSvcController],
  providers: [AccoSvcService],
  exports: [AccoSvcService],
})
export class AccoSvcModule {}
