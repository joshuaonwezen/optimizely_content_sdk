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

export const HeroBlockFragment = gql`
  fragment HeroBlockFields on HeroBlock {
    __typename
    headline
    subheadline
    ctaText
    ctaLink
    backgroundImage {
      url {
        default
      }
      altText
    }
  }
`;

export const TextBlockFragment = gql`
  fragment TextBlockFields on TextBlock {
    __typename
    body {
      json
      html
    }
  }
`;

export const LandingPageFragment = gql`
  fragment LandingPageFields on LandingPage {
    mainContentArea {
      ...HeroBlockFields
      ...TextBlockFields
    }
    seo {
      metaTitle
      metaDescription
    }
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
        ...LandingPageFields
      }
    }
  }
  ${ProductPageFragment}
  ${ArticleFragment}
  ${HomepageFragment}
  ${HeroBlockFragment}
  ${TextBlockFragment}
  ${LandingPageFragment}
`;
