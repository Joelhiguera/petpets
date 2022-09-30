import { gql } from '@apollo/client';


export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
    }
  }
`;

export const LOGGED_IN_USER = gql`
 query loggedInUser {
    loggedInUser {
      firstName 
      _id
    }
  }
`;
