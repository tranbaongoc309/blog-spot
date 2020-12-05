import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Nice to meet you!</h1>
    <h2> Welcome to Bao's Corner!</h2>
    <p> Hello everyone! My name is Bao. Welcome you to my Blog Post!
    Writing is always a big problem to me. However, I still decided to create
    this blog. Instead of avoid this skill, I choose live with it! I will
    start at sharing my real stories, which are written by my heart. I hope
    you can enjoy!</p>
    <Link to ="/contact">Need an instructor?</Link>
    

    
  </Layout>
)

export default IndexPage
