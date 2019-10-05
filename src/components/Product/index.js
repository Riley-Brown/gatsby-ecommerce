import React, { useState } from "react"
import Img from "gatsby-image"

import SpinnerSvg from "assets/svg/Spinner"

export default function Product({ product, stripeCheckout }) {
  const [loading, setLoading] = useState(false)

  return (
    <div className="product" key={product.id}>
      <span
        onClick={e => {
          setLoading(true)
          stripeCheckout(e, product.id)
        }}
      >
        <Img
          fluid={product.localFiles[0].childImageSharp.fluid}
          alt={product.product.name}
        />
      </span>
      <div className="product-info">
        <div>
          <h1>{product.product.name}</h1>
          <p>{product.product.metadata.description}</p>
          <h3>${product.price / 100}</h3>
        </div>
        <div>
          <button
            onClick={e => {
              setLoading(true)
              stripeCheckout(e, product.id)
            }}
            style={{ position: "relative", minHeight: "40px" }}
          >
            {loading ? (
              <SpinnerSvg style={{ height: "40px", width: "100%" }} />
            ) : (
              "Buy Now"
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
