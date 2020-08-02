import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Banner = () => {

    const data = useStaticQuery(graphql`
    query {
      unity: file(relativePath: { eq: "unity-portfolio-blue.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      selfPortrait: file(relativePath: { eq: "self-portrait-lg.png" }) {
        childImageSharp {
          fluid(maxWidth: 536, quality: 90) {
            ...GatsbyImageSharpFluid,
          }
        }
      }
      vscode: file(relativePath: { eq: "vscode-portfolio-blue.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    }
  `)

    return (
        <div className='banner'>
            <div className='container'>
                <div className='row'>
                    <div className='main-text'>Welcome</div>
                    <div className="main-image">
                    <Img fluid={data.selfPortrait.childImageSharp.fluid} />
                    </div>
                </div>
                <div className='scroll'>
                  <span>Scroll Down</span>
                </div>
            </div>
            <div className='fixed-misc'>
              Full Stack Developer
            </div>
        </div>
    );
}

export default Banner;
