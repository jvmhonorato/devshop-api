
import { Query, Resolver } from "@nestjs/graphql";
import { ProductPublic } from "./dto/product";
import { ProductService } from "./product.service";

@Resolver(of => ProductPublic)
export class ProductResolver {
   constructor(private readonly productService: ProductService){}

   @Query(returns => [ProductPublic], {name: 'getAllProducts'})
   async getAllProducts(): Promise<ProductPublic[]>{
    return await this.productService.findAll()
   }


}