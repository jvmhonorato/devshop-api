import { Field, InputType } from "@nestjs/graphql";
import { IsUUID, Length, Matches, Validate } from "class-validator";

import { ProductSlugIsUnique } from "../validations/ProductSlugIsUnique";
const mobileNumberRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/


@InputType()
export class ProductUpdateInput{
    @Field()
    @IsUUID()
    id: string

    @Field()
    @Length(4,12)
    name: string

    @Field()
    @Length(4,12)
    @Matches( mobileNumberRegex)
    @Validate(ProductSlugIsUnique)
    slug: string
    
    @Field()
    @Length(4,48)
    description: string

    @Field()
    @IsUUID()
    category: string
}