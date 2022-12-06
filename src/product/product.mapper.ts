import { Category } from "src/category/category.entity"
import { ProductCreateInput } from "./dto/product.create.input"
import { Product } from "./product.entity"



// convert between types
export class ProductMapper {
    public static toEntity(input:ProductCreateInput): Product {
        const entity = new Product()
        entity.name = input.name
        entity.slug = input.slug
        entity.description = input.description

        //link category to product 
        const category = new Category()
        category.id   = input.category 
        entity.categoy = category 
    
        return entity
    }
    
}