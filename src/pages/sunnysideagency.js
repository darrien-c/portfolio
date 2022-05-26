// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* Capstone Content */
import SunnySideContent from '../components/sunnyside-content';

const SunnySide = () => (
  <Layout>
    <SEO title="Sunny Side Agency" />
    <SunnySideContent />
  </Layout>
)

export default SunnySide;
