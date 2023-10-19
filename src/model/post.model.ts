import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field((type) => Int)
  userId: number;
  @Field((type) => Int)
  id: number;
  @Field()
  title: string;
  @Field()
  body: string;
}
