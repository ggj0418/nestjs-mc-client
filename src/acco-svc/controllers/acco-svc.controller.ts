import { Controller, Logger } from '@nestjs/common';
import { AccoSvcService } from '../services/acco-svc.service';

@Controller('acco-svc')
export class AccoSvcController {
  private logger = new Logger(AccoSvcController.name);

  constructor(private readonly accoSvcService: AccoSvcService) {}
}
