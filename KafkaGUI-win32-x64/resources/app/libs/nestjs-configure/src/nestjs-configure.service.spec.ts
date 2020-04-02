import { Test, TestingModule } from '@nestjs/testing';
import { NestjsConfigureService } from './nestjs-configure.service';

describe('NestjsConfigureService', () => {
  let service: NestjsConfigureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestjsConfigureService],
    }).compile();

    service = module.get<NestjsConfigureService>(NestjsConfigureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
