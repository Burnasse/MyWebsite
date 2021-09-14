import React from 'react'
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import { useI18next } from "gatsby-plugin-react-i18next"

const SEO = ({ title, description, image, content }: SeoProps) => {
    const { pathname } = useLocation()
    const { site } = useStaticQuery(query)
    const { language } = useI18next();

    const {
      defaultTitle,
      defaultDescription,
      defaultImage,
      siteUrl,
      siteLanguage,
      } = site.siteMetadata
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
      }

      return (
        <Helmet title={seo.title}>
          <html lang={language ? language : siteLanguage} />
          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image} />
          {seo.url && <meta property="og:url" content={seo.url} />}
          {(content ? true : null) && <meta property="og:type" content={content} />}
          {seo.title && <meta property="og:title" content={seo.title} />}
          {seo.description && (
            <meta property="og:description" content={seo.description} />
          )}
          {seo.image && <meta property="og:image" content={seo.image} />}
        </Helmet>
      )
}

export default SEO

type SeoProps = {
  title: string
  description: string
  image?: string
  content?: string
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultImage: image
        siteUrl
        siteLanguage
      }
    }
  }
`