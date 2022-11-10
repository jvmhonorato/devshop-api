import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Category } from "./category.entity";
import { CategoryService } from "./category.service";
import { CategoryPublic } from "./dto/category";
import { CategoryCreateInput } from "./dto/category-create.input";

//from Category
@Resolver(of => CategoryPublic)

export class CategoryResolver{
    constructor(private readonly categoryService: CategoryService) {}
    @Query(() => [CategoryPublic], { name: 'getAllCategories'})
    async getAllCategories(): Promise<CategoryPublic[]>{
        return await this.categoryService.findAll()
    }

  // create category input
    @Mutation(returns => CategoryPublic, {name: 'createCategory' })
    async createCategory(
       @Args('input') input: CategoryCreateInput
    ): Promise<CategoryPublic> {
        const categoryEntity = new Category()
        categoryEntity.name = input.name 
        categoryEntity.slug = input.slug
        return this.categoryService.create(categoryEntity)
    }
}