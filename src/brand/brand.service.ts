import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Brand } from "./brand.entity";



@Injectable()
export class BrandService {
    constructor(
        @InjectRepository(Brand)
        private categoryRepository: Repository<Brand>
    ){}
    async findAll(): Promise<Brand[]>{
        return this.categoryRepository.find()
    }
    async findById(id): Promise<Brand> {
        return this.categoryRepository.findOne({where:{id}})
    }
    async findBySlug(slug: string): Promise<Brand> {
        return this.categoryRepository.findOne({where:[{slug}]})
    }

    async create(input: Brand): Promise<Brand>{
        return this.categoryRepository.save(input)
    }
    async update(input: Brand): Promise<Brand>{
        await this.categoryRepository.update(input.id,input)
        return input
    }

    async delete(id: string): Promise<boolean>{
        try {
            await this.categoryRepository.delete(id)
            return true
        } catch(err) {
            return false
        }
         
    }
} 