import * as React from "react"
import { PageProps } from "gatsby"
import Page from "../../../components/page"

//import { useIntl } from "gatsby-plugin-intl"

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

  ////// Making useIntl available in the code
  //const intl = useIntl()
  //// const locale = intl.locale !== "es" ? `/${intl.locale}` : ""
  ////console.log(intl.locale)
  //props.lang = intl.locale
  //console.log(props)

  return <Page {...props}>{children}</Page>
}


// { position, rotation, portalModel }: { position: Vector2; rotation: Vector3; portalModel: GLTFShape },
// 
// // When adding types for both pageContext (represented by LocaleLookUpInfo)
// // and GraphQL query data (represented by IndexQueryProps)
// 
// import {PageProps} from "gatsby"
// 
// type IndexQueryProps = { downloadCount: number }
// type LocaleLookUpInfo = { translationStrings: any } & { langKey: string, slug: string }
// type IndexPageProps = PageProps<IndexQueryProps, LocaleLookUpInfo>
// 
// export default (props: IndexPageProps) => 