import { Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { CategoryPublic } from "./dto/category";

//from Category
@Resolver(of => CategoryPublic)

export class CategoryResolver{
    constructor(private readonly categoryService: CategoryService) {}
    @Query(() => [CategoryPublic], { name: 'getAllCategories'})
    async getAllCategories(): Promise<CategoryPublic[]>{
        return await this.categoryService.findAll()
    }
}