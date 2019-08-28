import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { StyledProducts } from "./StyledProducts"
import { Link } from "gatsby"

export default function Products() {
  const data = useStaticQuery(graphql`
    query ProductsQuery {
      allStripeSku {
        edges {
          node {
            id
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
  `)
  return (
    <StyledProducts>
      {data.allStripeSku.edges.map(edge => (
        <Link
          to={edge.node.product.metadata.slug}
          className="link-wrapper"
          key={edge.node.product.id}
        >
          <div className="product" key={edge.node.product.id}>
            <img src={edge.node.image} atl={edge.node.product.name} />
            <div className="product-info">
              <h1>{edge.node.product.name}</h1>
              <p>{edge.node.product.description}</p>
              <h3>${edge.node.price / 100}</h3>
            </div>
          </div>
        </Link>
      ))}
    </StyledProducts>
  )
}
