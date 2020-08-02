import React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image'

const AboutBlurb = () => {
    const data = useStaticQuery(graphql`
    query {
      snow: file(relativePath: { eq: "snowboard-port-bw.PNG" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      selfPortrait: file(relativePath: { eq: "photo-bw-port.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid,
          }
        }
      }
    }
  `)

    return (
        <div className='about-blurb'>
            <div className='container'>
                <div className='inner-blurb'>
                    <div className='content'>
                        <h3>About Me</h3>
                        <p>
                            I am a reformed chemical engineer turned full stack developer and game design enthusiast. My first love really was chemistry and math, 
                            so chemical engineering seemed like a natural path for me to follow. I completed my BS in Chemical Engineering at the University of Maryland, College Park 
                            in May of 2018. And while I still find the subject matter in chemical engineering to be incredibly compelling the job search was not as 
                            fruitful as I hoped it would be.
                        </p>
                        <p>
                            This brought me to the Flatiron School, where I completed the Software Engineering track adding a wide new array of skills in my repertoire. 
                            An added bonus was that I ended up loving programming and development, which I initially did not see coming.
                            Learning languages makes it easier to pick up other languages, so now I am able to take on game design as a hobby doing both scripting and art design.
                        </p>
                        <div className='btn-row'>
                            <Link to='/projects'>View Projects</Link>
                        </div>
                    </div>
                    <div className='images'>
                        <div className='top-left'>
                            <Img fluid={data.selfPortrait.childImageSharp.fluid}/>
                        </div>
                        {/* <div className='top-left'>
                            <Img fluid={data.snow.childImageSharp.fluid}/>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='blue-box'></div>
            <div className='blue-box overlay'></div>
        </div>
    );
}

export default AboutBlurb;
