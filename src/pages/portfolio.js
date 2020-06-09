// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/* Portfolio */
import PortfolioContent from "../components/portfolio-content"



const Portfolio = () => (
  <Layout>
    <SEO title="Page two" />
    <PortfolioContent />
  </Layout>
)

export default Portfolio
