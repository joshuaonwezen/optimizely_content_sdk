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
    legacyBody: mainContentArea
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
      ... on ImageMedia {
        _metadata {
          url {
            default
          }
        }
        altText
      }
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

// Helper fragment for Experience Composition
// Fetches the structure needed for <OptimizelyExperience>
export const ExperienceFragment = gql`
  fragment ExperienceComposition on LandingExperience {
    composition {
      nodes {
        ... on CompositionComponentNode {
          key
          nodeType
          displayName
          component {
             ...HeroBlockFields
             ...TextBlockFields
          }
        }
        ... on CompositionStructureNode {
          key
          nodeType
          displayName
          nodes {
             ... on CompositionComponentNode {
                key
                nodeType
                displayName
                component {
                   ...HeroBlockFields
                   ...TextBlockFields
                }
             }
          }
        }
      }
    }
  }
`;

export const LandingExperienceFragment = gql`
  fragment LandingExperienceFields on LandingExperience {
    seo {
      metaTitle
      metaDescription
    }
    ...ExperienceComposition
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
        ...LandingExperienceFields
      }
    }
  }
  ${ProductPageFragment}
  ${ArticleFragment}
  ${HomepageFragment}
  ${HeroBlockFragment}
  ${TextBlockFragment}
  ${LandingPageFragment}
  ${ExperienceFragment}
  ${LandingExperienceFragment}
`;
