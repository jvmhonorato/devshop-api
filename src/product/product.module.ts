/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm'
import { Module } from '@nestjs/common'
import { Product } from './product.entity'
import { ProductService } from './product.service'
import { ProductResolver } from './product.resolver'
import { ProductSlugIsUnique } from './validations/ProductSlugIsUnique'

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductService, ProductResolver, ProductSlugIsUnique]
})
//always create a empty class to export Modules
export class ProductModule {}
