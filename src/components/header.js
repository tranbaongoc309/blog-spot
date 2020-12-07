import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "../components/header.module.css"

const Header = ({ siteTitle, siteDescription, home, aboutme, blog}) => (
  <header
    style={{
      background: `darkorange`,
      marginBottom: `1.45rem`,
      textAlign: 'center'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        alignSelf:`center`,
      }}
    >
      <h1 style={{ margin: "0 0 0 0.9rem" }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <h3 style={{color: 'rgba(223,227,235,0.4)', margin: '0 0 0 0.9rem'}}>{siteDescription}</h3>
      <div style={{}}>
       
         <Link to="/home" className={headerStyles.link}>{home}</Link>
        
         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
         <Link to="/aboutme" className={headerStyles.link}>{aboutme}</Link>
       
         <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
         <Link to="/blog" className={headerStyles.link}>{blog}</Link>
        
       </div> 
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  home: PropTypes.string,
  aboutme:PropTypes.string,
  blog: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
