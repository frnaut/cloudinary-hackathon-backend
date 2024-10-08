import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FiltersService } from './filters.service';
import { CreateFilterDto } from './dto/create-filter';

@Controller('filters')
export class FiltersController {
  constructor(private readonly filtersService: FiltersService) {}

  @Post()
  async createFilter(@Body() dto: CreateFilterDto) {
    return await this.filtersService.createFilter(dto);
  }

  @Get()
  async getFilters() {
    return await this.filtersService.getFilters();
  }

  @Get(':id')
  async getFilterById(@Param('id') id: string) {
    return await this.filtersService.getFilterById(+id);
  }
}
