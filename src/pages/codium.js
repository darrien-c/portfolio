// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* Capstone Content */
import CodiumContent from '../components/codium-content';

const Capstone = () => (
  <Layout>
    <SEO title="Codium" />
    <CodiumContent />
  </Layout>
)

export default Capstone
