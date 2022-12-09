import { Field, InputType } from "@nestjs/graphql";
import { IsUUID, Length } from "class-validator";


@InputType()
export class CategoryUpdateInput{
    @Field()
    @IsUUID()
    id: string

    @Field()
    @Length(4,20)
    name: string

    @Field()
    @Length(4,20)
    slug: string
}