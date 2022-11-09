import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { CategoryModule } from './category/category.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import  {TypeOrmModule} from '@nestjs/typeorm'
import { Category } from './category/category.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      url:'postgres://postgres:mustafar2013@localhost:5432/devshop',
      autoLoadEntities:true,
      synchronize:true,
     // entities: [Category],
      logging:true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
