import {gql} from '@apollo/client';

const LIST_ZELLER_ITEMS = gql`
  query {
    listZellerCustomers {
      nextToken
      items {
        id
        name
        email
        role
      }
    }
  }
`;

export {LIST_ZELLER_ITEMS};
