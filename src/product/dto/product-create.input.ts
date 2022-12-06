import { Field, InputType } from "@nestjs/graphql";


@InputType()
export class ProductCreateInput{
    @Field()
    name: string

    @Field()
    slug: string

    @Field()
    description: string

    @Field()
    category: string

}