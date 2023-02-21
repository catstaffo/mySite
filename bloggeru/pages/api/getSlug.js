import { gql } from "graphql-request";

export const SLUG_URL = gql`
  {
    posts {
      slug
    }
  }
`;