import React from "react";
import "../css/styles.scss";
import Layout from '../components/layout';

/* Works Section */
import Works from '../components/works';



const IndexPage = () => {


  return(
      
      <Layout>
        <SEO title="Web Developer | Darrien " />
        <Works />             
      </Layout>

  )
}

export default IndexPage
