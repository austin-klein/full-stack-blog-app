import { User } from "../entities/User";
import { Arg, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import argon2 from "argon2";
import { sign } from "jsonwebtoken";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hello there";
  }

  @Mutation(() => User)
  async register(@Arg("username") username: string, @Arg("password") password: string) {
    const hashedPassword = await argon2.hash(password);

    const user = User.create({
      username,
      password: hashedPassword,
    });

    try {
      await user.save();
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
    return user;
  }

  @Mutation(() => LoginResponse)
  async login(@Arg("username") username: string, @Arg("password") password: string) {
    const user = await User.findOne({ username: username });

    if (!user) {
      throw new Error("user not found");
    }

    const verify = await argon2.verify(user.password, password);

    if (!verify) {
      throw new Error("Bad Password");
    }

    return {
      accessToken: sign({ userId: user.id }, "sdjkfhklsjdfdsfjskdjssdfsdd", { expiresIn: "5m" }),
    };
  }
}
