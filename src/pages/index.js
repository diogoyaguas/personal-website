import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Layout from "../components/layout"
import SEO from "../components/seo"

import HTML from "../images/svg/html-5.svg"
import JS from "../images/svg/javascript.svg"
import NODEJS from "../images/svg/nodejs.svg"
import JAVA from "../images/svg/java.svg"
import REACT from "../images/svg/reagir.svg"

const AEFEUP_URL = "https://www.aefeup.pt"
const FAP_URL = "https://www.fap.pt"
const TF_URL = "https://www.trustfractal.com/"

const IndexPage = (data) => (
  <Layout>
    <SEO title="Me" />
    <section className="intro">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} className="text-center">
            <Img
              fluid={data.data.file.childImageSharp.fluid}
              alt="Diogo Yaguas' profile"
            />
            <h1>
              I'm Diogo Yaguas
            </h1>
            <p>
              an Informatics and Computing Engineer Student at FEUP.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="me">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} className="text-center">
            <h1>
              Hi.
            </h1>
            <p>
              Currently, in the fifth year of a BSc (3 years) + MSc (2 years)
              degree in Informatics and Computing Engineering at FEUP, I am
              taking the last step to becoming a Software Engineer. During my
              years of study at FEUP, I developed extensive computer science skills.
            </p>
          </Col>
        </Row>
        <Row className="logos">
          <Col >
            <HTML />
          </Col>
          <Col >
            <JS />
          </Col>
          <Col >
            <NODEJS />
          </Col>
          <Col >
            <JAVA />
          </Col>
          <Col >
            <REACT />
          </Col>
        </Row>
      </Container>
    </section>
    <section className="more">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} className="text-center">
            <h1>
              More about me.
            </h1>
            <p>
              My experience in several student associations, particularly <span className="underline">
                <a href={AEFEUP_URL} target="_blank" rel="noopener noreferrer">
                  AEFEUP
                </a>
              </span> and <span className="underline">
                <a href={FAP_URL} target="_blank" rel="noopener noreferrer">
                  FAP
                </a>
              </span>
              ,provided me with opportunities to connect with people in the industry. Here,
              I led and participated in a team that worked relentlessly to provide the best
              activities for our student community. So far, I have taken one summer internship
              at <span className="underline">
                <a href={TF_URL} target="_blank" rel="noopener noreferrer">
                  Trust Fractal
                </a>
              </span>, focused mostly on Web Development. These allowed me to practice
              software engineering for two months and to learn that no question is not intellectual
              enough to ask, encouraging me to seek information and learn through my peers. These
              activities helped me develop soft skills, such as communication and teamwork,
              as well as gain an eagerness to tackle new experiences.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="final">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} lg={8} className="text-center">
            <h1>
              To finish.
            </h1>
            <p>
              I have a knack for communicating and sharing experiences, always looking for
              opportunities to be involved in new projects that force me out of my comfort zone,
              where I will be able to keep on learning. Consequently, this can contribute to my
              professional and personal growth. I am a very social person, so if you want to know
              a little more about me, have no problem getting in touch with me.
            </p>
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

export default IndexPage