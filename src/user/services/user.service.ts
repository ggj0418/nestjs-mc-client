import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { GetUserRequest } from '../dto/get-user-request.interface';
import { GetUserResponse } from '../dto/get-user-response.interface';
import { AccoSvcService } from '../../acco-svc/services/acco-svc.service';
import { FindAllByOwnerUidRequest } from '../../acco-svc/dto/find-all-by-owner-uid.request';

@Injectable()
export class UserService {
  private logger = new Logger(UserService.name);

  constructor(
    @Inject(forwardRef(() => AccoSvcService))
    private readonly accoService: AccoSvcService,
  ) {}

  async create(data: GetUserRequest): Promise<GetUserResponse> {
    const accoIds: string[] = await this.accoService
      .findAllByOwnerUid({ ownerUid: data.id } as FindAllByOwnerUidRequest)
      .then((response) => {
        return response.accoIds;
      })
      .catch((err) => {
        this.logger.error(`findByUid ${data.id} ${err}`);
        throw new BadRequestException(err);
      });
    this.logger.debug(`findByUid ${data.id} ${accoIds}`);

    return new Promise((resolve) => {
      resolve({
        username: 'test',
      });
    });
  }
}
