import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"

const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
        allProjectsJson {
        nodes {
          name
          url
          date
          description
          technologies
        }
      }
    }
  `)

    return (
        <Container>
            {data.allProjectsJson.nodes.map((project, index) => (
                <div key={index} className={project.name}>
                    <span className="underline">
                        <a className="name" href={project.url} target="_blank" rel="noopener noreferrer">
                            {project.name}
                        </a>
                    </span>
                    <p className="date">
                        {project.date}
                    </p>
                    <p className="description">
                        {project.description}
                    </p>
                    <ul className="technologies">
                        {project.technologies.map(tech =>
                            <li key={tech}>{tech}</li>
                        )}
                    </ul>
                </div>
            ))}
        </Container>

    )
}

export default Projects