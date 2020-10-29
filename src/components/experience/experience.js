import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"

const Experience = () => {
    const data = useStaticQuery(graphql`
    query {
        allExperienceJson {
        nodes {
          name
          url
          location
          date
          details
        }
      }
    }
  `)

    return (
        <Container>
            {data.allExperienceJson.nodes.map((experience, index) => (
                <div key={index} className={experience.name}>
                    <p className="name">
                        {experience.name}
                    </p>
                    <span className="underline">
                        <a className="location" href={experience.url} target="_blank" rel="noopener noreferrer">
                            {experience.location}
                        </a>
                    </span>
                    <p className="date">
                        {experience.date}
                    </p>
                    <ul className="details">
                        {experience.details.map(detail =>
                            <li key={detail}>{detail}</li>
                        )}
                    </ul>
                </div>
            ))}
        </Container>

    )
}

export default Experience