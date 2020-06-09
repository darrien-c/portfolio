// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/* MatchMemes Content */
import MatchMemesContent from '../components/matchmeme-content';

const MatchMemes = () => (
  <Layout>
    <SEO title="Page two" />
    <MatchMemesContent />
  </Layout>
)

export default MatchMemes
