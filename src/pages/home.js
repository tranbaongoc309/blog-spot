import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Home = () => {
    return (
        <Layout>
          <SEO title="Home" />
          <h1>Welcome to Bao's corner!</h1>
          
          <p> Hello everyone! My name is Bao. Welcome you to my Blog Post!
          Writing is always a big problem to me. However, I still decided to create
          this blog. Instead of avoid this skill, I choose live with it! I will
          start at sharing my real stories, which are written by my heart. I hope
          you will enjoy it!</p>
        </Layout>
    )
}

export default Home