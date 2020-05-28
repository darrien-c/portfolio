import React from "react"
import "../css/styles.scss"

/* Header */
import Header from '../components/header'

/* Works Section */
import Works from '../components/works'

/* About Section */
 import About from '../components/about' 

const IndexPage = () => (
  <div>
    <Header />
    <Works />
    <About />
  </div>
  
)

export default IndexPage
