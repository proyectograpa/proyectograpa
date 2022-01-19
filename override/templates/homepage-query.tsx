import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

export const query = graphql`
  query ($homepagePageLimit: Int!, $homepageProjectLimit: Int!) {
    pages: allPage(sort: { fields: title, order: ASC }, limit: $homepagePageLimit) {
      nodes {
        slug
        lang
        title
        cover {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90)
          }
        }
        __typename
      }
    }
    projects: allProject(sort: { fields: date, order: DESC }, limit: $homepageProjectLimit) {
      nodes {
        slug
        lang
        title: shortTitle
        cover {
          childImageSharp {
            gatsbyImageData(width: 1200, quality: 90)
          }
        }
        __typename
      }
    }
  }
`
