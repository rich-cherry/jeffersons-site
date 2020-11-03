import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';
import { AboutWrapper } from './styles';

export function About() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "jlogo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  return (
    <AboutWrapper>
      <Img fixed={data.file.childImageSharp.fixed} />
      <div className="AboutText">
        <h1>Greenville, NC's premier destination for flowers, wine, gifts.</h1>
        <h4>Serving Greenville since 1948.</h4>
        <Link className="button" to="/about">Our Story</Link>
      </div>

    </AboutWrapper>
  )
}