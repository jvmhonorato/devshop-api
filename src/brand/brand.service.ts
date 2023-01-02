import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Brand } from "./brand.entity";



@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private brandRepository: Repository<Brand>
    ){}
    async findAll(): Promise<Brand[]>{
        return this.brandRepository.find()
    }
    async findById(id): Promise<Brand> {
        return this.brandRepository.findOne({where:{id}})
    }
    async findBySlug(slug: string): Promise<Brand> {
        return this.brandRepository.findOne({where:[{slug}]})
    }

    async create(input: Brand): Promise<Brand>{
        return this.brandRepository.save(input)
    }
    async update(input: Brand): Promise<Brand>{
        await this.brandRepository.update(input.id,input)
        return input
    }

    async delete(id: string): Promise<boolean>{
        try {
            await this.brandRepository.delete(id)
            return true
        } catch(err) {
            return false
        }
         
    }
} 