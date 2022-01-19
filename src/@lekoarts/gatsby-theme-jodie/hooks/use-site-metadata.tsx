import { graphql, useStaticQuery } from "gatsby"

import { useIntl } from "gatsby-plugin-intl"

type Props = {
  site: {
    siteMetadata: {
      siteTitle: string
      siteTitleAlt: string
      siteHeadline: string
      siteUrl: string
      siteDescription: string
      siteLanguage: string
      siteImage: string
      author: string
      [key: string]: unknown
    }
  }
}

const useSiteMetadata = () => {

  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteHeadline
          siteUrl
          siteDescription
          siteLanguage
          siteImage
          author
        }
      }
    }
  `)

  const intl = useIntl()
  data.site.siteMetadata.langRequested = intl.locale

  return data.site.siteMetadata
}

export default useSiteMetadata
