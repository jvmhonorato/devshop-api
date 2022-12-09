import { Field, InputType } from "@nestjs/graphql";
import { IsUUID, Length } from "class-validator";


@InputType()
export class ProductCreateInput{
    @Field()
    @Length(4,12)
    name: string

    @Field()
    @Length(4,12)
    slug: string

    @Field()
    @Length(8,24)
    description: string

    @Field()
    @IsUUID()
    category: string

}