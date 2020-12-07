import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome to Bao's Corner!</h1>
    <p> Hello everyone! My name is Bao. Welcome you to my Blog Post!
          Writing is always a big problem to me. However, I still decided to create
          this blog. Instead of avoid this skill, I choose live with it! I will
          start at sharing my real stories, which are written by my heart. I hope
          you will enjoy it!</p>
    
    <Link to ="/aboutme">Need an instructor?</Link>
    

    
  </Layout>
)

export default IndexPage
