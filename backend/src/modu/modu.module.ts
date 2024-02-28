import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListItemController } from './list-item/list-item.controller';

import { ListItemService } from './list-item/list-item.service';

import { ListItem } from '../entities/list-item.entity';
import { Users } from '../entities/users.entity';
import { Travels } from "../entities/travels.entity";

import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TestModule } from './test/test.module';
import { TravelsModule } from './travels/travels.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([ListItem, Users, Travels]),
    TestModule,
    TravelsModule,
  ],
  controllers: [ListItemController, UsersController],
  providers: [ListItemService, UsersService]
})
export class ModuModule {}
