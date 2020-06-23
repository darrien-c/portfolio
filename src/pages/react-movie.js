// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* MatchMemes Content */
import ReactMovieContent from '../components/react-movie-content';

const ReactMovie = () => (
  <Layout>
      <SEO title="React Movie Database" />
     <ReactMovieContent />
  </Layout>
)

export default ReactMovie
