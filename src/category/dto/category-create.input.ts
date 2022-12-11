import { Field, InputType } from "@nestjs/graphql";
import { Length, Validate } from 'class-validator'
import { CategorySlugIsUnique } from "../validations/CategorySlugIsUnique";

@InputType()
export class CategoryCreateInput{
    @Field()
    @Length(4,20)
    name: string

    @Field()
    @Length(4,20)
    @Validate(CategorySlugIsUnique)
    slug: string
}