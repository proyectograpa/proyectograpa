import { graphql } from "gatsby"
import PageComponent from "../components/page"

export default PageComponent

//page(slug: { eq: $slug }, lang: {eq: "es"}) {
export const query = graphql`
  query ($slug: String!) {
    page(slug: { eq: $slug }) {
      title
      lang
      slug
      excerpt
      body
      color
      custom
      cover {
        childImageSharp {
          resize(width: 1200, quality: 85) {
            src
          }
        }
      }
    }
  }
`
