import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

//data interface of app

@Entity()
export class Category {

    //generate ID
    @PrimaryGeneratedColumn('uuid')
    id: string


    @Column({ length: 250, nullable:false})
    name: string

    @Column({ length: 250, nullable:false})
    slug: string
}