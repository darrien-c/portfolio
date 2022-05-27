// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* Capstone Content */
import CorporateGiftingContent from '../components/corporate-gifting-content';

const CorporateGifting = () => (
  <Layout>
    <SEO title="Laid Back Snacks" />
    <CorporateGiftingContent />
  </Layout>
)

export default CorporateGifting;
