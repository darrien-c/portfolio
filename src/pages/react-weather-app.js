// Gatsby supports TypeScript natively!
import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

/* Weather Content */
import ReactWeatherContent from '../components/react-weather-content';

const ReactWeather = () => (
  <Layout>
      <SEO title="React Movie Database" />
     <ReactWeatherContent />
  </Layout>
)

export default ReactWeather
