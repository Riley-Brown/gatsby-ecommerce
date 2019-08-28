/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const productTemplate = path.resolve("src/components/Product/index.js")
    resolve(
      graphql(`
        {
          allStripeSku {
            edges {
              node {
                price
                image
                product {
                  images
                  description
                  name
                  metadata {
                    slug
                  }
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.allStripeSku.edges.forEach(edge => {
          createPage({
            path: edge.node.product.metadata.slug,
            component: productTemplate,
            context: {
              slug: edge.node.product.metadata.slug,
              itemName: edge.node.product.name,
              itemPrice: edge.node.price,
              itemDescription: edge.node.product.description,
              itemImage: edge.node.image,
            },
          })
        })
        return
      })
    )
  })
}
