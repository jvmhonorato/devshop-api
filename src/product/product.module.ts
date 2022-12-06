import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Product } from "./product.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([Product])
    ]
})
//always create a empty class to export Modules
export class ProductModule {}