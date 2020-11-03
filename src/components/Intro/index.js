import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby';
import { IntroWrapper } from './styles';

export function Intro() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "peony-sq.png" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <IntroWrapper
      data-sal="fade"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <div className="introText">
        <h1>Flowers for every occasion.</h1>
        <h4>Located in downtown Greenville, NC.<br />Pickup and Delivery Available. </h4>
        <Link className="button" to="/all-products">Shop Now</Link>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </IntroWrapper>
  )
}