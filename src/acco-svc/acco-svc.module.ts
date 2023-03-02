import { Global, Module } from '@nestjs/common';
import { AccoSvcService } from './services/acco-svc.service';

@Global()
@Module({
  providers: [AccoSvcService],
  exports: [AccoSvcService],
})
export class AccoSvcModule {}
