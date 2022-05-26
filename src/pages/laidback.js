// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* Capstone Content */
import LaidBackContent from '../components/laidback-content';

const LaidBack = () => (
  <Layout>
    <SEO title="Laid Back Snacks" />
    <LaidBackContent />
  </Layout>
)

export default LaidBack;
