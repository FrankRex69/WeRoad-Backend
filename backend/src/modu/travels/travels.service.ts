import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Travels } from '../../entities/travels.entity';

@Injectable()
export class TravelsService {
    constructor(
        @InjectRepository(Travels) public repository: Repository<Travels>,
      ) {}

      findAll(): Promise<Travels[]> {
        return this.repository.find(
          {
            order: {
              id: "ASC"
            }
          }
        );
      }
}
