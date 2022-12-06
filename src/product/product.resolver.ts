
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { ProductPublic } from "./dto/product";
import { ProductCreateInput } from "./dto/product.create.input";
import { Product } from "./product.entity";
import { ProductMapper } from "./product.mapper";
import { ProductService } from "./product.service";

@Resolver(of => ProductPublic)
export class ProductResolver {
   constructor(private readonly productService: ProductService){}

   @Query(returns => [ProductPublic], {name: 'getAllProducts'})
   async getAllProducts(): Promise<ProductPublic[]>{
    return await this.productService.findAll()
   }

     //Mutation  create product input
     @Mutation(returns => ProductPublic, {name: 'createProduct' })
     async createCategory(
        @Args('input') input: ProductCreateInput
     ): Promise<ProductPublic> {
           
         return this.productService.create(ProductMapper.toEntity(input))
     }


}