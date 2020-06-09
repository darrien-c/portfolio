import React from "react";
import "../css/styles.scss";
import SEO from '../components/seo';
import Layout from '../components/layout';
import Particles from 'react-particles-js';

/* Header */
import Header from '../components/header'

/* Works Section */
import Works from '../components/works'

/* About Section */
 import About from '../components/about'

 /* Footer Section */
 import Footer from '../components/footer' 

const IndexPage = () => {

  return(
      
      <Layout>
        <SEO title/>
        <Header />
        <Works />        
        <Footer />         
      </Layout>

  )
}

export default IndexPage
