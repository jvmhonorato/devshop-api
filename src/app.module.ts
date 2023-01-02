import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { CategoryModule } from './category/category.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import  {TypeOrmModule} from '@nestjs/typeorm'
import { Category } from './category/category.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { BrandModule } from './brand/brand.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal:true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async(configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        synchronize:true,
        logging:true,
        autoLoadEntities: true
      })
    }),
    // TypeOrmModule.forRoot({
    //   type:'postgres',
    //   url:'postgres://postgres:mustafar2013@localhost:5432/devshop',
    //   autoLoadEntities:true,
    //   synchronize:true,
    //  // entities: [Category],
    //   logging:true
    // }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CategoryModule,
    ProductModule,
    BrandModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
