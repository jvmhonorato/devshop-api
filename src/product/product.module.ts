import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Product } from "./product.entity";
import { ProductService } from "./product.service";
import { ProductResolver } from "./product.resolver";


@Module({
    imports:[
        TypeOrmModule.forFeature([Product])
    ],
    providers: [ProductService, ProductResolver]
})
//always create a empty class to export Modules
export class ProductModule {}