import * as React from "react"
import { PageProps } from "gatsby"
import Page from "../../../components/page"

//import { useIntl  } from "gatsby-plugin-intl"
//const intl = useIntl()
//const locale = intl.locale !== "es" ? `/${intl.locale}` : ""

type DataProps = {
  page: {
    lang: string
    title: string
    slug: string
    excerpt: string
    body: string
    color: string
    custom: boolean
    cover: {
      childImageSharp: {
        resize: {
          src: string
        }
      }
    }
  }
}

export default function JodieCorePage({ children, ...props }: PageProps<DataProps>) {
  return <Page {...props}>{children}</Page>
}
