import React from "react"
import '../styles/styles.scss'

import Scrollbar from "smooth-scrollbar"

// Import Components
import Header from '../components/header'
import Banner from '../components/banner'
import AboutBlurb from '../components/aboutBlurb'

const IndexPage = () => (
  <div>
    <Header />
    <Banner />
    <AboutBlurb />
  </div>
)

export default IndexPage
