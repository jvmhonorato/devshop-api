import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Category } from "./brand.entity";
import { CategoryService } from "./brand.service";
import { CategoryPublic } from "./dto/brand";
import { CategoryCreateInput } from "./dto/brand-create.input";
import { CategoryUpdateInput } from "./dto/brand-update.input";
import { CategoryMapper } from "./dto/brand.mapper";

//from Category
@Resolver(of => CategoryPublic)

export class CategoryResolver{
    constructor(private readonly categoryService: CategoryService) {}
    //Query read all category
    @Query(() => [CategoryPublic], { name: 'getAllCategories'})
    async getAllCategories(): Promise<CategoryPublic[]>{
        return await this.categoryService.findAll()
    }
    //Query read by id
    @Query(returns => CategoryPublic, { name: 'getCategoryById'})
    async getCategoryById(
        @Args('id') id: string
        ): Promise<CategoryPublic> {
        return await this.categoryService.findById(id)
    }
      //Query read by slug
      @Query(returns => CategoryPublic, { name: 'getCategoryBySlug'})
      async getCategoryBySlug(
          @Args('slug') slug: string
          ): Promise<CategoryPublic> {
          return await this.categoryService.findBySlug(slug)
      }

  //Mutation  create category input
    @Mutation(returns => CategoryPublic, {name: 'createCategory' })
    async createCategory(
       @Args('input') input: CategoryCreateInput
    ): Promise<CategoryPublic> {
        
        return this.categoryService.create(CategoryMapper.toEntity(input))
    }

     //Mutation  update category input
     @Mutation(returns => CategoryPublic, {name: 'updateCategory' })
     async updateCategory(
        @Args('input') input: CategoryUpdateInput
     ): Promise<CategoryPublic> {
         
         return this.categoryService.update(input)
     }
     //Mutation  delete category input
     @Mutation(returns => Boolean, {name: 'deleteCategory' })
     async deleteCategory(
        @Args('id') input: string
     ): Promise<boolean> {
         
         return this.categoryService.delete(input)
     }
}