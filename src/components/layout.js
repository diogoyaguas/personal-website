/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/vars.css"
import "../styles/layout.css"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, footer, headerClassName }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header
        siteTitle={data.site.siteMetadata.title}
        className={headerClassName}
      />
      <main>{children}</main>
      {footer && <Footer />}
    </div>
  )
}

Layout.defaultProps = {
  footer: true,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  footer: PropTypes.bool,
}

export default Layout
