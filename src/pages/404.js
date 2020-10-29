import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data }) => (
    <Layout footer={false}>
        <div>
            <Container>
                <SEO title="404: Not found" />
                <div className="page-not-found">
                    <div className="sad-face">
                        <Img
                            fluid={data.file.childImageSharp.fluid}
                            alt="Sad Face"
                        />
                    </div>
                    <h1>PAGE 404</h1>
                    <p>
                        The page you are looking for might have been removed, had its name
                        changed or is temporarily unavailable.
                    </p>
                    <Button className="back" href="/" size="lg">
                        Go to Homepage
                    </Button>
                </div>
            </Container>
        </div>
    </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "sad.png" }) {
      childImageSharp {
        fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`

export default NotFoundPage