/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import Layout from "./layout"
import Seo from "./seo"
import GridItem from "./grid-item"
import locales from "../locales"
import { visuallyHidden } from "../styles/utils"

//import { useIntl } from "gatsby-plugin-intl"
//const intl = useIntl()
//let current_lang = intl.locale

type DataProps = {
  projects: {
    nodes: {
      lang: string
      shortTitle: string
      slug: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }[]
  }
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { projects }, location }) => (
  // // Making useIntl available in the code
  // const intl = useIntl()
  // // Use language iso for the routes
  // const locale = intl.locale !== "es" ? `/${intl.locale}` : ""
  <Layout>
    <Seo title="Projects" pathname={location.pathname} />
    <h1 sx={visuallyHidden} data-testid="page-title">
      {locales.projects}
    </h1>
    <div
      sx={{
        display: `grid`,
        gridTemplateColumns: [`1fr`, `1fr 1fr`],
        gridAutoRows: `50vw`,
      }}
    >
      {projects.nodes.length > 0 ? (
        projects.nodes.map((project) => (
          <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
            <GatsbyImage image={project.cover.childImageSharp.gatsbyImageData} alt="" />
            <span>{project.shortTitle}</span>
          </GridItem>
        ))
      ) : (
        <div sx={{ padding: 3 }}>No projects found at the location defined for "projectsPath"</div>
      )}
    </div>
  </Layout>
)

export default Project
