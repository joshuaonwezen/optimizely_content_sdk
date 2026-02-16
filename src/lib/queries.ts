import { gql } from 'graphql-request';

export const ProductPageFragment = gql`
  fragment ProductPageFields on ProductPage {
    productName
    slug
    description {
      json
      html
    }
  }
`;

export const ArticleFragment = gql`
  fragment ArticleFields on Article {
    headline
    slug
    publicationDate
    body {
      json
      html
    }
  }
`;

export const HomepageFragment = gql`
  fragment HomepageFields on Homepage {
    headline
    mainContentArea
  }
`;

export const GetContentByPath = gql`
  query GetContentByPath($path: String!) {
    _Content(where: { _metadata: { url: { default: { eq: $path } } } }) {
      items {
        _metadata {
          key
          types
        }
        ...ProductPageFields
        ...ArticleFields
        ...HomepageFields
      }
    }
  }
  ${ProductPageFragment}
  ${ArticleFragment}
  ${HomepageFragment}
`;
