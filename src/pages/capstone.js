// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* Capstone Content */
import CapstoneContent from '../components/capstone-content';

const Capstone = () => (
  <Layout>
    <SEO title="Page two" />
    <CapstoneContent />
  </Layout>
)

export default Capstone
