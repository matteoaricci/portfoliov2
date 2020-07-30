import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Banner = () => {

    const data = useStaticQuery(graphql`
    query {
      snowbuds: file(relativePath: { eq: "snowboard-buds-resized.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gradLuke: file(relativePath: { eq: "luke-grad-resized.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bevWed: file(relativePath: { eq: "bev-wed-resized.png" }) {
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
                    <div className='side-image left'>
                        <Img fluid={data.bevWed.childImageSharp.fluid}/>
                    </div>
                    <div className='main-text'>Matteo Ricci</div>
                    <div className="main-image">
                    <Img fluid={data.snowbuds.childImageSharp.fluid} />
                    </div>
                    <div className='side-image right'>
                        <Img fluid={data.gradLuke.childImageSharp.fluid}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
