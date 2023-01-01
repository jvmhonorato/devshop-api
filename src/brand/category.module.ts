import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "./brand.entity";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./brand.service";
import { CategorySlugIsUnique } from "./validations/BrandSlugIsUnique";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    providers:[CategoryService, CategoryResolver, CategorySlugIsUnique]
})
//always create a empty class to export Modules
export class CategoryModule{}