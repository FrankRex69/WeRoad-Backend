import { Controller, Get, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { IresponseTravelsBuy} from '@commons/interfaces/travels-buy.interface';

import { TravelsBuyService } from './travels-buy.service';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Travels buy')
@Controller('travels-buy')
export class TravelsBuyController {

    @Inject(TravelsBuyService) public readonly service: TravelsBuyService;

    @Public()
    @Get()
    public async findAll(): Promise<IresponseTravelsBuy[]> {
        return await this.service.findAll();
    }
}
