// Manually defining ExperienceNode to avoid import issues
export type ExperienceNode = any;

export interface ProductPage {
  productName: string;
  slug: string;
  description: {
    html: string;
    json: any;
  };
}

export interface Homepage {
  headline: string;
  mainContentArea: string;
}

export interface Article {
  headline: string;
  slug: string;
  publicationDate: string;
  body: {
    html: string;
    json: any;
  };
}

export interface ImageMedia {
  _metadata?: {
    url: {
      default: string;
    };
  };
  url?: {
    default: string;
  };
  altText?: string;
}

export interface HeroBlock {
  __typename: 'HeroBlock';
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: ImageMedia;
}

export interface TextBlock {
  __typename: 'TextBlock';
  body: {
    html: string;
    json: any;
  };
}

export interface LandingPage {
  mainContentArea?: (HeroBlock | TextBlock)[] | (HeroBlock | TextBlock);
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}

export interface LandingExperience {
  composition?: {
    nodes: ExperienceNode[];
  };
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
  };
}
