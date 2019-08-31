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
            attributes {
              name
            }
            product {
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
        items: [{ sku, quantity: 10 }],
        successUrl: "http://localhost:8000",
        cancelUrl: "http://localhost:8000",
      })
      .then(res => console.log(res))
  }
  return (
    <StyledProducts>
      {data.allStripeSku.edges.map(edge => (
        <Link
          // to={`/${edge.node.product.metadata.slug}`}
          className="link-wrapper"
          key={edge.node.id}
        >
          <div
            className="product"
            // key={edge.node.product.id}
            onClick={e => stripeCheckout(e, edge.node.id)}
          >
            <img src={edge.node.image} atl={edge.node.attributes.name} />
            <div className="product-info">
              <h1>{edge.node.attributes.name}</h1>
              <p>{edge.node.product.metadata.description}</p>
              <h3>${edge.node.price / 100}</h3>
            </div>
          </div>
        </Link>
      ))}
    </StyledProducts>
  )
}
