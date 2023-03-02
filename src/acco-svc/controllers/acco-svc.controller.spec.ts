import { Test, TestingModule } from '@nestjs/testing';
import { AccoSvcController } from './acco-svc.controller';

describe('AccoSvcController', () => {
  let controller: AccoSvcController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccoSvcController],
    }).compile();

    controller = module.get<AccoSvcController>(AccoSvcController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
