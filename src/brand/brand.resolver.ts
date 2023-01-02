import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { BrandService } from "./brand.service";
import { BrandPublic } from "./dto/brand";
import { BrandCreateInput } from "./dto/brand-create.input";
import { BrandUpdateInput } from "./dto/brand-update.input";
import { BrandMapper } from "./dto/brand.mapper";

//from Category
@Resolver(of => BrandPublic)

export class BrandResolver{
    constructor(private readonly brandService: BrandService) {}
    //Query read all category
    @Query(() => [BrandPublic], { name: 'getAllBrands'})
    async getAllCategories(): Promise<BrandPublic[]>{
        return await this.brandService.findAll()
    }
    //Query read by id
    @Query(returns => BrandPublic, { name: 'getBrandyById'})
    async getCategoryById(
        @Args('id') id: string
        ): Promise<BrandPublic> {
        return await this.brandService.findById(id)
    }
      //Query read by slug
      @Query(returns => BrandPublic, { name: 'getBrendBySlug'})
      async getCategoryBySlug(
          @Args('slug') slug: string
          ): Promise<BrandPublic> {
          return await this.brandService.findBySlug(slug)
      }

  //Mutation  create category input
    @Mutation(returns => BrandPublic, {name: 'createBrand' })
    async createCategory(
       @Args('input') input: BrandCreateInput
    ): Promise<BrandPublic> {
        
        return this.brandService.create(BrandMapper.toEntity(input))
    }

     //Mutation  update category input
     @Mutation(returns => BrandPublic, {name: 'updateBrand' })
     async updateCategory(
        @Args('input') input: BrandUpdateInput
     ): Promise<BrandPublic> {
         
         return this.brandService.update(input)
     }
     //Mutation  delete category input
     @Mutation(returns => Boolean, {name: 'deleteBrand' })
     async deleteCategory(
        @Args('id') input: string
     ): Promise<boolean> {
         
         return this.brandService.delete(input)
     }
}