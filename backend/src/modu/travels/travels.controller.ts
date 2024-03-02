import { Controller, Get, Inject } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { IresponseTravels} from '@commons/interfaces/travels.interface';

import { TravelsService } from './travels.service';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Travels')
@Controller('travels')
export class TravelsController {

    @Inject(TravelsService) public readonly service: TravelsService;
    
    @Public()
    @Get()
    public async findAll(): Promise<IresponseTravels[]> {
        return await this.service.findAll();
    }

    
}
