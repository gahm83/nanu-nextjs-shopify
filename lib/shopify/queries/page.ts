import seoFragment from '../fragments/seo';

const pageFragment = /* GraphQL */ `
  fragment page on Page {
    ... on Page {
      id
      title
      handle
      body
      bodySummary
      seo {
        ...seo
      }
      collections: metafield(namespace: "custom", key: "collections") {
        value
        references(first: 10) {
          nodes {
            ... on Metaobject {
              fields {
                key
                value
                reference {
                  ... on MediaImage {
                    id
                    image {
                      src
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
      about: metafield(namespace: "content", key: "about") {
        value
        references(first: 10) {
          nodes {
            ... on Metaobject {
              fields {
                key
                value
                reference {
                  ... on Metaobject {
                    fields {
                      value
                      key
                      reference {
                        ... on MediaImage {
                          id
                          image {
                            src
                            width
                            height
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      faqs: metafield(namespace: "content", key: "faqs") {
        value
        references(first: 10) {
          nodes {
            ... on Metaobject {
              fields {
                key
                value
              }
            }
          }
        }
      }
      recipes: metafield(namespace: "custom", key: "recipes") {
        value
        references(first: 10) {
          nodes {
            ... on Metaobject {
              fields {
                value
                key
                reference {
                  ... on MediaImage {
                    id
                    image {
                      url
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
      createdAt
      updatedAt
    }
  }
  ${seoFragment}
`;

export const getPageQuery = /* GraphQL */ `
  query getPage($handle: String!) {
    pageByHandle(handle: $handle) {
      ...page
    }
  }
  ${pageFragment}
`;

export const getPagesQuery = /* GraphQL */ `
  query getPages {
    pages(first: 100) {
      edges {
        node {
          ...page
        }
      }
    }
  }
  ${pageFragment}
`;
