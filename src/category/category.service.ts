import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";



@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ){}
    async findAll(): Promise<Category[]>{
        return this.categoryRepository.find()
    }

    async create(input: Category): Promise<Category>{
        return this.categoryRepository.save(input)
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