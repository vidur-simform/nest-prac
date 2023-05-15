import { Global, Module } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
@Global()
@Module({
  imports:[],
  exports:[CatsService],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
