import React from "react";
import "../css/styles.scss";
import Layout from '../components/layout';
import SEO from "../components/seo";

/* Section */
import Works from '../components/works';
import About from '../components/about';



const IndexPage = () => {


  return(      
      <Layout>
        <SEO title="Front-End Web Developer | Darrien" />
        <About />             
        <Works />             
      </Layout>

  )
}

export default IndexPage
