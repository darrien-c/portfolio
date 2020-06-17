import React from "react";
import "../css/styles.scss";
import Layout from '../components/layout';
import SEO from "../components/seo";

/* Works Section */
import Works from '../components/works';



const IndexPage = () => {


  return(      
      <Layout>
        <SEO title="Darrien | Front-End Web Developer" />
        <Works />             
      </Layout>

  )
}

export default IndexPage
