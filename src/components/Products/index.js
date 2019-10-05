import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { StyledProducts } from "./StyledProducts"
import { Link } from "gatsby"

import Product from "components/Product"

export default function Products() {
  const data = useStaticQuery(graphql`
    query ProductsQuery {
      allStripeSku {
        edges {
          node {
            id
            localFiles {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image
            price
            product {
              name
              metadata {
                slug
                description
              }
            }
          }
        }
      }
    }
  `)

  const stripeCheckout = (e, sku) => {
    e.preventDefault()
    const stripe = window.Stripe("pk_test_5Whh8fsKhT3xcbKeHdzmH7bU001RtkjRq1")
    stripe
      .redirectToCheckout({
        items: [{ sku, quantity: 1 }],
        successUrl: "http://localhost:8000",
        cancelUrl: "http://localhost:8000",
      })
      .then(res => console.log(res))
  }

  return (
    <StyledProducts id="products">
      {data.allStripeSku.edges.map(edge => (
        <Product
          key={edge.node.id}
          product={edge.node}
          stripeCheckout={stripeCheckout}
        />
      ))}
    </StyledProducts>
  )
}
