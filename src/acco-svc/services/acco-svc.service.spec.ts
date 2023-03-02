import { Test, TestingModule } from '@nestjs/testing';
import { AccoSvcService } from './acco-svc.service';

describe('AccoSvcService', () => {
  let service: AccoSvcService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccoSvcService],
    }).compile();

    service = module.get<AccoSvcService>(AccoSvcService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
