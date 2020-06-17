// Gatsby supports TypeScript natively!
import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

/* Portfolio */
import PortfolioContent from "../components/portfolio-content";



const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <PortfolioContent />
  </Layout>
)

export default Portfolio
