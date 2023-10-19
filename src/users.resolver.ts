import { Query, Resolver } from '@nestjs/graphql';
import { User } from './model/user.model';

@Resolver('BFF')
export class UserResolver {
  @Query((returns) => [User])
  async users() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  }
}
