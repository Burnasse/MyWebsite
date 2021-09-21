import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

// markup
const NotFoundPage = () => {
  return (
    <Layout title="404" description="Page not found">

    </Layout>
  )
}

export default NotFoundPage

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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