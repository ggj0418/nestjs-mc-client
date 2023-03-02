import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { accoGrpcClientOptions } from '../protos/acco-grpc.option';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { FindAllByOwnerUidRequest } from '../dto/find-all-by-owner-uid.request';
import { Observable } from 'rxjs';
import { FindAllByOwnerUidResponse } from '../dto/find-all-by-owner-uid.response';

interface IAccoService {
  findAllByOwnerUid(
    data: FindAllByOwnerUidRequest,
  ): Observable<FindAllByOwnerUidResponse>;
}

@Injectable()
export class AccoSvcService implements OnModuleInit {
  private logger = new Logger(AccoSvcService.name);

  @Client(accoGrpcClientOptions) private readonly client: ClientGrpc;
  private accoService: IAccoService;

  async onModuleInit() {
    this.logger.debug(`AccoSvcService.onModuleInit`);
    this.accoService = await this.client.getService<IAccoService>(
      'AccoService',
    );
  }

  async findAllByOwnerUid(
    data: FindAllByOwnerUidRequest,
  ): Promise<FindAllByOwnerUidResponse> {
    this.logger.debug(
      `findAllByOwnerUid in AccoService ${JSON.stringify(data, null, 2)}`,
    );
    try {
      const accoIds: Observable<FindAllByOwnerUidResponse> =
        this.accoService.findAllByOwnerUid(data);

      this.logger.debug(
        `findAllByOwnerUid after calling accoService ${data.ownerUid}`,
      );
      return new Promise((resolve, reject) => {
        accoIds.subscribe({
          next: (value: FindAllByOwnerUidResponse) => {
            this.logger.debug(
              `findAllByOwnerUid ${JSON.stringify(value, null, 2)}`,
            );
            resolve(value);
          },
          error: (err: any) => {
            this.logger.error(`findAllByOwnerUid ${err}`);
            reject(err);
          },
        });
      });
    } catch (err) {
      this.logger.error(`acco-svc-service's findAllByOwnerUid ${err}`);
    }
  }
}
