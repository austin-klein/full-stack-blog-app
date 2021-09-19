import { gql } from "@apollo/client";

export const GET_ALL_POSTS_QUERY = gql`
  query {
    posts {
      id
      title
      text
    }
  }
`;
