import { Test, TestingModule } from '@nestjs/testing';
import { TravelsBuyController } from './travels-buy.controller';

describe('TravelsBuyController', () => {
  let controller: TravelsBuyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelsBuyController],
    }).compile();

    controller = module.get<TravelsBuyController>(TravelsBuyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
