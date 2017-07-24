import gql from 'graphql-tag';

export default gql`
query GetPortfolioById($id: ID!) {
  song(id: $id) {
    id
    title
  }
}
`;
