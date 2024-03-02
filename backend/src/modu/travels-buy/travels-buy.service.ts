import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTravelsBuyDto } from './dto/create-travels-buy.dto';
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

  async create(dto: CreateTravelsBuyDto): Promise<CreateTravelsBuyDto> {
    return this.repository.save(dto);
  }

  async remove(id: number): Promise<TravelsBuy> {
    const listItem = await this.repository.findOne({where : {id: id}});
    if (!listItem) {
      throw new NotFoundException(`Commission #${id} not found`);
    }
    return await this.repository.softRemove(listItem);
  }

}
