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
    console.log("ayyyy")
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
    <StyledProducts>
      {data.allStripeSku.edges.map(edge => (
        <div className="product" key={edge.node.product.id}>
          <span onClick={e => stripeCheckout(e, edge.node.id)}>
            <Img fluid={edge.node.localFiles[0].childImageSharp.fluid} />
          </span>
          <div className="product-info">
            <div>
              <h1>{edge.node.product.name}</h1>
              <p>{edge.node.product.metadata.description}</p>
              <h3>${edge.node.price / 100}</h3>
            </div>
            <div>
              <button onClick={e => stripeCheckout(e, edge.node.id)}>
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </StyledProducts>
  )
}
