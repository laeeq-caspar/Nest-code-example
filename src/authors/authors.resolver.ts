import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class AuthorsResolver {
  @Query(() => String)
  async author(@Args('name', { type: () => String }) name: string) {
    // Here we will add the service code for Database & we will call the DB via ORM
    return `Hello ${name}`;
  }
}
