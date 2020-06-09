// Gatsby supports TypeScript natively!
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

/* Capstone Content */
import SwiftContent from '../components/swift-content';

const Swift = () => (
  <Layout>
    <SEO title="Page two" />
    <SwiftContent />
  </Layout>
)

export default Swift
