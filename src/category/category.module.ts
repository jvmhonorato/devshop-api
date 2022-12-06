import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./category.entity";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers:[CategoryService, CategoryResolver]
})
//always create a empty class to export Modules
export class CategoryModule{}