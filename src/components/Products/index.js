import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { StyledProducts } from "./StyledProducts"
import { Link } from "gatsby"

export default function Products() {
  const data = useStaticQuery(graphql`
    query ProductsQuery {
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
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <StyledProducts>
      {data.allContentfulProducts.edges.map(product => (
        <div className="product">
          <Link to={product.node.slug}>
            <h1>{product.node.itemName}</h1>
            <p>{product.node.itemDescription.itemDescription}</p>
            <Img fluid={product.node.itemImage.fluid} />
          </Link>
        </div>
      ))}
    </StyledProducts>
  )
}
