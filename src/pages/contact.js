import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
    return (
        <Layout>
          <SEO title="Contact" />
          <h1> Contact Me!</h1>
          <h3 style={{textUnderlinePosition}}>My Email</h3>
          <Link to="/">Go Home</Link>

        </Layout>
    )
}

export default Contact