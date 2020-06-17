// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* MatchMemes Content */
import MatchMemesContent from '../components/matchmeme-content';

const MatchMemes = () => (
  <Layout>
      <SEO title="Match the Memes" />
     <MatchMemesContent />
  </Layout>
)

export default MatchMemes
