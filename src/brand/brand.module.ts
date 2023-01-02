import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Brand } from "./brand.entity";
import { BrandResolver } from "./brand.resolver";
import { BrandService } from "./brand.service";
import { BrandSlugIsUnique } from "./validations/BrandSlugIsUnique";

@Module({
    imports: [TypeOrmModule.forFeature([Brand])],
    providers:[BrandService, BrandResolver, BrandSlugIsUnique]
})
//always create a empty class to export Modules
export class BrandModule{}