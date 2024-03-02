import { Test, TestingModule } from '@nestjs/testing';
import { TravelsBuyService } from './travels-buy.service';

describe('TravelsBuyService', () => {
  let service: TravelsBuyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelsBuyService],
    }).compile();

    service = module.get<TravelsBuyService>(TravelsBuyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
