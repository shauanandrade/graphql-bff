import { Query, Resolver } from '@nestjs/graphql';
import { Post } from './model/post.model';

@Resolver('BFF')
export class BFFResolver {
  @Query((returns) => [Post])
  async posts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);

    return data;
  }
}
