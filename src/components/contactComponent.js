import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


const ContactComponent = () => {

    const data = useStaticQuery(graphql`
    query {
      mail: file(relativePath: { eq: "mail-logo.png" }) {
        childImageSharp {
            fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid
           
          }
        }
      }
      link: file(relativePath: { eq: "linked-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid
           
          }
        }
      }
      github: file(relativePath: { eq: "github-logo.png" }) {
        childImageSharp {
            fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid
            
          }
        }
      }
      instagram: file(relativePath: { eq: "insta-logo.png" }) {
        childImageSharp {
            fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid
          
          }
        }
      }
      medium: file(relativePath: { eq: "medium-logo.png" }) {
        childImageSharp {
            fluid(maxWidth: 100, quality: 90) {
            ...GatsbyImageSharpFluid
           
          }
        }
      }
    }
  `)

    return (
      <div className='contact'>
      <div className='container'>
         <div className='row'>
            <div className='contact-header'>Find and COntact Me Here</div>
            <div className="contacts">
               <div> 
                  <a href='mail:matteo.a.ricci@gmail.com'>
                  <Img fluid={data.mail.childImageSharp.fluid} />
                  Email
                  </a>
               </div>
               <div>
                  <a href='https://www.linkedin.com/in/matteo-ricci-170b90167/'>
                  <Img fluid={data.link.childImageSharp.fluid} />
                  LinkedIn
                  </a>
               </div>
               <div>
                  <a href='https://github.com/matteoaricci'>
                  <Img fluid={data.github.childImageSharp.fluid} />
                  Github
                  </a>
               </div>
               <div>
                  <a href='https://medium.com/@matteo.a.ricci'>
                  <Img fluid={data.medium.childImageSharp.fluid} />
                  Medium
                  </a>
               </div>
               <div>
                  <a href='https://www.instagram.com/mattyicericci/?hl=en'>
                  <Img fluid={data.instagram.childImageSharp.fluid} />
                  Instagram
                  </a>
               </div>
            </div>
         </div>
         <div className='scroll'>
            <span>Not Sure What To Put Here</span>
         </div>
      </div>
      <div className='fixed-misc'>
         Full Stack Developer
      </div>
   </div>
    );
}

export default ContactComponent;
