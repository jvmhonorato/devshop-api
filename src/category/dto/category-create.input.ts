import { Field, InputType } from "@nestjs/graphql";
import { Length } from 'class-validator'

@InputType()
export class CategoryCreateInput{
    @Field()
    @Length(4,20)
    name: string

    @Field()
    @Length(4,20)
    slug: string
}