import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BFFResolver } from './bff.resolver';
import { AuthorsResolver } from './authors/author.resolver';
import { UserResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [AuthorsResolver, BFFResolver, UserResolver],
})
export class AppModule {}
