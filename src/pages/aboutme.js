import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Aboutme = () => {
    return (
        <Layout>
          <SEO title="Aboutme" />
          <h1> Nice to meet you!</h1>
          <h3>Let get to know about each other! I will go first!</h3>
          <p>"My name is Bao Ngoc. You can call me Ann too.
          I come from Vietnam. I've been in US for almost 2 years. 
          I've been in love with creating for as long as I can 
          remember. Growing up, most kids played with their hot 
          wheels cars on road/city rugs, but I opted to draw and 
          construct my own on tag board. And I've been a 
          multi-passionate creative ever since. Drawing or making 
          creative DIY alway make me feel great in free time. I 
          really want this can be apart of my future job so I can 
          enjoy working alot!"</p>
          <div>
         
          <h5>Click<span>&nbsp;&nbsp;&nbsp;&nbsp;</span><Link to="http://facebook.com">My Facebook</Link><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>to know more about me!</h5>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>


        

        </Layout>
    )
}

export default Aboutme