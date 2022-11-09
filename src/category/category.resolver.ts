import { Query, Resolver } from "@nestjs/graphql";
import { CategoryService } from "./category.service";
import { Category } from "./dto/category";

//from Category
@Resolver(of => Category)

export class CategoryResolver{
    constructor(private readonly categoryService: CategoryService) {}
    @Query(() => [Category], { name: 'getAllCategories'})
    async getAllCategories(): Promise<Category[]>{
        return await this.categoryService.findAll()
    }
}