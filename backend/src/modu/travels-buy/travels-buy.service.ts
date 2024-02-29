import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { TravelsBuy } from '../../entities/travels-buy.entity';

@Injectable()
export class TravelsBuyService {
    constructor(
        @InjectRepository(TravelsBuy) public repository: Repository<TravelsBuy>,
      ) {}

      findAll(): Promise<TravelsBuy[]> {
        return this.repository.find(
          {
            order: {
              id: "DESC"
            }
          }
        );
      }
}
