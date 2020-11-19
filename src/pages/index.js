import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello world!</h1>
    <h2> My name is Bao, this is my blog!</h2>
    <p> Need an instructor? <Link to ="/contact">Click Here!</Link></p>
    
  </Layout>
)

export default IndexPage
