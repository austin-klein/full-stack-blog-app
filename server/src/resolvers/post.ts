import { Post } from "../entities/Post";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(): Promise<Post[]> {
    const posts = Post.find({});

    return posts;
  }

  @Mutation(() => Post)
  async createPost(
    @Arg("title") title: string,
    @Arg("text") text: string,
    @Arg("userId") userId: string
  ) {
    const post = Post.create({
      title,
      text,
      userId,
    });

    try {
      await post.save();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
    return post;
  }
}
