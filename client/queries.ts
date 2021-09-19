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
  query ($username: String!) {
    getUser(username: $username) {
      username
      image
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation ($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      accessToken
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation ($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      accessToken
    }
  }
`;
