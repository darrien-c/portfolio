import React from "react"
import "../css/styles.scss"


/* Header */
import Header from '../components/header'

/* Works Section */
import Works from '../components/works'

/* About Section */
 import About from '../components/about'

 /* Footer Section */
 import Footer from '../components/footer' 

const IndexPage = () => (
  <div>
    <Header />
    <Works />
    <About />
    <Footer />
  </div>
  
)

export default IndexPage
