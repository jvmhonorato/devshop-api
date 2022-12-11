import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { CategoryService } from "../category.service";

@ValidatorConstraint({name:'categorySlugIsUnique', async: true})
export class CategorySlugIsUnique implements 
ValidatorConstraintInterface{
    constructor(private readonly categoryService: CategoryService){}
    async validate(text: string,validationArguments: ValidationArguments):Promise<boolean>{
        const category = await this.categoryService.findBySlug(text)
        if(category){
            return false
        }
        return true
       
    }
    defaultMessage( ) : string{
       
        return 'Slug must be unique'
    }
}