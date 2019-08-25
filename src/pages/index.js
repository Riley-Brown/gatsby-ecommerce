import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"
import Header from "../components/Header"

import Products from "../components/Products"

const IndexPage = () => (
  <>
    {/* <Header /> */}
    <Layout>
      <Products />
    </Layout>
  </>
)

export default IndexPage
