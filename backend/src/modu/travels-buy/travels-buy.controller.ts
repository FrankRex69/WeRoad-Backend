import { Controller, Get, Post, Delete, Inject, Body, UseGuards, Param, ParseIntPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { IresponseTravelsBuy} from '@commons/interfaces/travels-buy.interface';

import { CreateTravelsBuyDto } from './dto/create-travels-buy.dto';

import { TravelsBuyService } from './travels-buy.service';
import { Public } from '../auth/decorators/public.decorator';
import { RoleGuard } from '../auth/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { Role } from '@commons/interfaces/users.interface';

@ApiTags('Travels buy')
@Controller('travels-buy')
export class TravelsBuyController {

    @Inject(TravelsBuyService) public readonly service: TravelsBuyService;

    @Public()
    @Get()
    // @ApiBearerAuth('access-token')
    // @UseGuards(RoleGuard)
    // @Roles(Role.Admin)
    public async findAll(): Promise<IresponseTravelsBuy[]> {
        return await this.service.findAll();
    }
    
    @Public()
    @Post()    
    create(@Body() dto: CreateTravelsBuyDto): Promise<CreateTravelsBuyDto> {
        return this.service.create(dto);
    }

    @Delete(':id')
    @ApiBearerAuth('access-token')
    @UseGuards(RoleGuard)
    @Roles(Role.Admin)   
    remove(@Param('id', ParseIntPipe) id: number): Promise<IresponseTravelsBuy> {   
        return this.service.remove(id);
    }
}
