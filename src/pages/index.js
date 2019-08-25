import React from "react"
import { Link } from "gatsby"
import Testing from "../components/Testing"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Products from "../components/Products"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Testing />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    <Products />
  </Layout>
)

export default IndexPage
