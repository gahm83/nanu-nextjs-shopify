export type Maybe<T> = T | null;

export type Connection<T> = {
  edges: Array<Edge<T>>;
};

export type Edge<T> = {
  node: T;
};

export type Cart = Omit<ShopifyCart, 'lines'> & {
  lines: CartItem[];
};

export type CartItem = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: Money;
  };
  merchandise: {
    id: string;
    title: string;
    selectedOptions: {
      name: string;
      value: string;
    }[];
    product: Product;
  };
};

export type Collection = ShopifyCollection & {
  path: string;
};

export type Image = {
  url: string;
  altText: string;
  width: number;
  height: number;
};

export type Picture = {
  url: string;
  width: number;
  height: number;
};

export type MediaImage = {
  id: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
};

export type Reviewer = {
  id: number;
  external_id: string | null;
  email: string;
  name: string;
  phone: string | null;
  accepts_marketing: boolean;
  unsubscribed_at: string | null;
  tags: string | null;
};

export type Review = {
  id: number;
  title: string;
  body: string;
  rating: number;
  product_external_id: number;
  reviewer: Reviewer;
  source: string;
  curated: string;
  published: boolean;
  hidden: boolean;
  verified: string;
  featured: boolean;
  created_at: string;
  updated_at: string;
  has_published_pictures: boolean;
  has_published_videos: boolean;
  pictures: string[];
  ip_address: string;
  product_title: string;
  product_handle: string;
};

export type Menu = {
  title: string;
  path: string;
};

export type Money = {
  amount: string;
  currencyCode: string;
};

export type Recipe = {
  title: string;
  description: string;
  image: {
    url: string;
    width?: number;
    height?: number;
  };
  url: string;
};

export type HeroColumn = {
  image: {
    url: string;
    width: number;
    height: number;
  };
  title: string;
  content: string;
};

export type HomeCollection = {
  title: string;
  image: {
    src: string;
    width?: number;
    height?: number;
  };
};

export type MetaObject = {
  [key: string]: any;
};

export type Page = {
  id: string;
  title: string;
  handle: string;
  body: string;
  bodySummary: string;
  seo?: SEO;
  top_banner: {
    value: string;
  };
  hero_banner: {
    value: string;
    reference: {
      fields: {
        key: string;
        value: string;
        reference?: {
          id: string;
          image?: {
            src: string;
            width: number;
            height: number;
          };
        };
      }[];
    };
  };
  hero_columns: {
    value: string;
    references: {
      nodes: {
        fields: {
          key: string;
          value: string;
          reference: {
            id: string;
            image: {
              src: string;
              width: number;
              height: number;
            };
          } | null;
        }[];
      }[];
    };
  };
  banner: {
    value: string;
    reference: {
      fields: {
        key: string;
        value: string;
        reference?: {
          id: string;
          image?: {
            src: string;
            width: number;
            height: number;
          };
        };
      }[];
    };
  };
  collections: {
    value: string;
    references: {
      nodes: {
        fields: {
          key: string;
          value: string;
          reference: {
            id: string;
            image: {
              src: string;
              width: number;
              height: number;
            };
          } | null;
        }[];
      }[];
    };
  };
  about: {
    value: string;
    references: {
      nodes: {
        fields: {
          key: string;
          value: string;
          reference: {
            fields: {
              key: string;
              value: string;
              reference: null | {
                id: string;
                image: {
                  src: string;
                  width: number;
                  height: number;
                };
              };
            }[];
          } | null;
        }[];
      }[];
    };
  };
  faqs: {
    value: string;
    references: {
      nodes: {
        fields: {
          key: string;
          value: string;
        }[];
      }[];
    };
  };
  recipes: {
    value: string;
    references: {
      nodes: {
        fields: {
          key: string;
          value: string;
          reference: {
            id: string;
            image: {
              url: string;
              width: number;
              height: number;
            };
          } | null;
        }[];
      }[];
    };
  };
  contact: {
    value: string;
    reference: {
      id: string;
      fields: {
        key: string;
        value: string;
      }[];
    };
  };
  createdAt: string;
  updatedAt: string;
};

type nutritionFacts = {
  value: string;
  reference: {
    image: {
      src: string;
      altText: string;
    };
  };
};

type metaValue = {
  value: string;
};

export type Product = Omit<ShopifyProduct, 'variants' | 'images'> & {
  variants: ProductVariant[];
  images: Image[];
  stars?: any;
  numberReviews?: any;
  price?: any;
  quantity?: any;
  weight?: metaValue;
  stock?: number;
  ingredients?: metaValue;
  nutritionFacts?: nutritionFacts;
  pictures?: any;
};

export type ProductOption = {
  id: string;
  name: string;
  values: string[];
};

export type ProductVariant = {
  id: string;
  title: string;
  availableForSale: boolean;
  selectedOptions: {
    name: string;
    value: string;
  }[];
  price: {
    amount: any;
  };
};

export type SEO = {
  title: string;
  description: string;
};

export type ShopifyCart = {
  id: string;
  checkoutUrl: string;
  cost: {
    subtotalAmount: Money;
    totalAmount: Money;
    totalTaxAmount: Money;
  };
  lines: Connection<CartItem>;
  totalQuantity: number;
};

export type ShopifyCollection = {
  handle: string;
  title: string;
  description: string;
  seo: SEO;
  updatedAt: string;
};

export type ShopifyProduct = {
  id: string;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  collections: any;
  options: ProductOption[];
  priceRange: {
    maxVariantPrice: Money;
    minVariantPrice: Money;
  };
  variants: Connection<ProductVariant>;
  featuredImage: Image;
  images: Connection<Image>;
  pictures: Connection<Image>;
  seo: SEO;
  tags: string[];
  updatedAt: string;
};

export type ShopifyCartOperation = {
  data: {
    cart: ShopifyCart;
  };
  variables: {
    cartId: string;
  };
};

export type ShopifyCreateCartOperation = {
  data: { cartCreate: { cart: ShopifyCart } };
};

export type ShopifyAddToCartOperation = {
  data: {
    cartLinesAdd: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyRemoveFromCartOperation = {
  data: {
    cartLinesRemove: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lineIds: string[];
  };
};

export type ShopifyUpdateCartOperation = {
  data: {
    cartLinesUpdate: {
      cart: ShopifyCart;
    };
  };
  variables: {
    cartId: string;
    lines: {
      id: string;
      merchandiseId: string;
      quantity: number;
    }[];
  };
};

export type ShopifyCollectionOperation = {
  data: {
    collection: ShopifyCollection;
  };
  variables: {
    handle: string;
  };
};

export type ShopifyCollectionProductsOperation = {
  data: {
    collection: {
      products: Connection<ShopifyProduct>;
    };
  };
  variables: {
    handle: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type ShopifyCollectionsOperation = {
  data: {
    collections: Connection<ShopifyCollection>;
  };
};

export type ShopifyMenuOperation = {
  data: {
    menu?: {
      items: {
        title: string;
        url: string;
      }[];
    };
  };
  variables: {
    handle: string;
  };
};

export type ShopifyPageOperation = {
  data: { pageByHandle: Page };
  variables: { handle: string };
};

export type ShopifyPagesOperation = {
  data: {
    pages: Connection<Page>;
  };
};

export type ShopifyProductOperation = {
  data: { product: ShopifyProduct };
  variables: {
    handle: string;
  };
};

export type ShopifyProductRecommendationsOperation = {
  data: {
    productRecommendations: ShopifyProduct[];
  };
  variables: {
    productId: string;
  };
};

export type ShopifyProductsOperation = {
  data: {
    products: Connection<ShopifyProduct>;
  };
  variables: {
    query?: string;
    reverse?: boolean;
    sortKey?: string;
  };
};

export type HeroBanner = {
  image: {
    src: string;
    width: number;
    height: number;
  };
  title: string;
};

export type Banner = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  cta: {
    url: string;
    link: string;
  };
};
