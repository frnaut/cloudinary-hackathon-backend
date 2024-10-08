import { Module } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { FiltersController } from './filters.controller';
import { PrismaService } from 'src/commons/prisma.service';

@Module({
  controllers: [FiltersController],
  providers: [FiltersService,PrismaService],
})
export class FiltersModule {}
