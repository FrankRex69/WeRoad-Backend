import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TravelsBuy } from 'src/entities/travels-buy.entity';
import { TravelsBuyController } from './travels-buy.controller';
import { TravelsBuyService } from './travels-buy.service';

@Module({
    imports: [TypeOrmModule.forFeature([TravelsBuy])],
    controllers: [TravelsBuyController],
    providers: [TravelsBuyService],
})
export class TravelsBuyModule {}
