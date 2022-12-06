
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { ProductPublic } from "./dto/product";
import { ProductCreateInput } from "./dto/product-create.input";
import { ProductUpdateInput } from "./dto/product-update.input";
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

    //Query read by id
    @Query(returns => ProductPublic, { name: 'getProductById'})
    async getProductById(
        @Args('id') id: string
        ): Promise<ProductPublic> {
        return await this.productService.findById(id)
    }

     //Mutation  create product input
     @Mutation(returns => ProductPublic, {name: 'createProduct' })
     async createProduct(
        @Args('input') input: ProductCreateInput
     ): Promise<ProductPublic> {
           
         return this.productService.create(ProductMapper.toEntity(input))
     }

     @Mutation(returns => ProductPublic, {name: 'updateProduct' })
     async updateProduct(
        @Args('input') input: ProductUpdateInput
     ): Promise<ProductPublic> {
           
         return this.productService.update(ProductMapper.fromUpdateToEntity(input))
     }
     
      //Mutation  delete product input
      @Mutation(returns => Boolean, {name: 'deleteProduct' })
      async deleteProduct(
         @Args('id') input: string
      ): Promise<boolean> {
          
          return this.productService.delete(input)
      }

}