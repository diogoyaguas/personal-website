import React from "react"
import Container from "react-bootstrap/Container"

import GitHub from "../images/svg/github.svg"
import LinkedIn from "../images/svg/linkedin.svg"
import Instagram from "../images/svg/instagram.svg"
import Facebook from "../images/svg/facebook.svg"

const FACEBOOK_URL = "https://fb.me/diogoyaguas"
const GITHUB_URL = "https://github.com/diogoyaguas"
const INSTAGRAM_URL = "https://www.instagram.com/diogoyaguas/"
const LINKEDIN_URL = "https://pt.linkedin.com/in/diogo-yaguas"

const Footer = () => (
  <>
    <Container>
      <footer>
        <div>
          <div className="contact-information">
            <p>
              <a
                href="mailto:diogo.yaguas@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                diogo.yaguas@gmail.com
              </a>
              &nbsp;
              <a href="tel:+351 912 858 9403">+351 912 848 950</a>
            </p>

            <div className="social-links">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
                <Facebook />
              </a>

              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                <GitHub />
              </a>

              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
                <Instagram />
              </a>

              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedIn />
              </a>

            </div>
          </div>
        </div>
      </footer>
    </Container>
  </>
)

export default Footer