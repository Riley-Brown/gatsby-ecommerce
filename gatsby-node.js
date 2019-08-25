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
          allContentfulProducts {
            edges {
              node {
                id
                itemName
                itemPrice
                itemDescription {
                  itemDescription
                }
                slug
                itemImage {
                  fluid {
                    src
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

        result.data.allContentfulProducts.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: productTemplate,
            context: {
              slug: edge.node.slug,
            },
          })
        })
        return
      })
    )
  })
}
