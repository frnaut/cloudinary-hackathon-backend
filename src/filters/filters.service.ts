import { Injectable } from '@nestjs/common';
import { CreateFilterDto } from './dto/create-filter';
import { PrismaService } from 'src/commons/prisma.service';

@Injectable()
export class FiltersService {

    constructor(private prisma: PrismaService){}

    async createFilter(dto: CreateFilterDto){
        return await this.prisma.filter.create({
            data: {
                name: dto.name,
                description: dto.description,
                prompt: dto.prompt,
                example: dto.example,
                width: dto.width,
                height: dto.height,
                public_id: dto.public_id
            }
        })
    }

    async getFilters(){
        return await this.prisma.filter.findMany()
    }

    async getFilterById(id: number){
        return await this.prisma.filter.findUnique({
            where: {
                id: id
            }
        })
    }
}
