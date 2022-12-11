import { Field, InputType } from "@nestjs/graphql";
import { Length, Matches, Validate } from 'class-validator'
import { CategorySlugIsUnique } from "../validations/CategorySlugIsUnique";

@InputType()
export class CategoryCreateInput{
    @Field()
    @Length(4,20)
    name: string

    @Field()
    @Length(4,20)
    @Matches(/^[a-z0-9+(?:-[a-z0-9]+)*$/)
    @Validate(CategorySlugIsUnique)
    slug: string
}