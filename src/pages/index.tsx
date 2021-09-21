import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/HeroSection";
import { graphql } from "gatsby";
import Background from "../components/Background";

const IndexPage = () => {
  return (
    <Layout title="Tommy Lecourt" description="Tommy Lecourt Student">
      <Background />
      <HeroSection />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
