import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Travels } from 'src/entities/travels.entity';
import { TravelsController } from './travels.controller';
import { TravelsService } from './travels.service';

@Module({
    imports: [TypeOrmModule.forFeature([Travels])],
    controllers: [TravelsController],
    providers: [TravelsService],
})
export class TravelsModule {}
