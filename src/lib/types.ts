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
