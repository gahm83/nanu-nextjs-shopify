import imageFragment from './image';
import seoFragment from './seo';

const productFragment = /* GraphQL */ `
  fragment product on Product {
    id
    handle
    availableForSale
    title
    description
    descriptionHtml
    options {
      id
      name
      values
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    collections(first: 1) {
      edges {
        node {
          handle
        }
      }
    }
    stock: totalInventory
    weight: metafield(namespace: "custom", key: "weight") {
      value
    }
    quantity: metafield(namespace: "custom", key: "quantity") {
      value
    }
    ingredients: metafield(namespace: "custom", key: "ingredients") {
      value
    }
    nutritionFacts: metafield(namespace: "custom", key: "nutrition_facts") {
      value
      reference {
        ... on MediaImage {
          image {
            src
            altText
          }
        }
      }
    }
    variants(first: 10) {
      edges {
        node {
          id
          title
          availableForSale
          selectedOptions {
            name
            value
          }
          price {
            amount
            currencyCode
          }
          weight
          weightUnit
        }
      }
    }
    featuredImage {
      ...image
    }
    images(first: 20) {
      edges {
        node {
          ...image
        }
      }
    }
    pictures: metafield(namespace: "custom", key: "pictures") {
      value
      references(first: 10) {
        nodes {
          ... on MediaImage {
            image {
              url
              width
              height
            }
          }
        }
      }
    }
    seo {
      ...seo
    }
    tags
    updatedAt
  }
  ${imageFragment}
  ${seoFragment}
`;

export default productFragment;
