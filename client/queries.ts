import { gql } from "@apollo/client";

export const HOME_QUERY = gql`
  query {
    posts {
      id
      title
      text
      userId
    }

    getUser(username: "test") {
      username
      image
    }
  }
`;

export const NAV_QUERY = gql`
  query {
    getUser(username: "test") {
      username
      image
    }
  }
`;
