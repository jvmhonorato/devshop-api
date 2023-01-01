import { Brand } from "../brand.entity";
import { BrandCreateInput } from "./brand-create.input";


// convert between types
export class BrandMapper {
    public static toEntity(input:BrandCreateInput): Brand {
        const entity = new Brand()
        entity.name = input.name
        entity.slug = input.slug
        return entity
    }
    
}