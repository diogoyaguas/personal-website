import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

import WorkExperience from "../components/experience/experience.js"
import Projects from "../components/projects/projects.js"


const WorkPage = (data) => (
  <Layout>
    <SEO title="Work" />
    <section className="cv">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={6} className="text-center">
            <Img
              fluid={data.data.file.childImageSharp.fluid}
              alt="Diogo Yaguas' profile"
            />
          </Col>
          <Col xs={12} lg={6} className="text-left">
            <h1>
              Diogo Yaguas
            </h1>
            <p className="title">
              Informatics and Computing Engineering Student
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} className="text-left">
            <p className="title">
              WORK HISTORY
            </p>
            <div className="work">
              <WorkExperience />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} className="text-left">
            <p className="title">
              Projects
            </p>
            <div className="work">
              <Projects />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "profile.png" }) {
      childImageSharp {
        fluid {
            ...GatsbyImageSharpFluid
          }
      }
    }
  }
`

export default WorkPage