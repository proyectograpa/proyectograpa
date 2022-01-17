/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image"
import Layout from "./layout"
import GridItem from "./grid-item"
import { itemListWrapperStyles, itemStyles } from "../styles/item-list"
import locales from "../locales"
import { visuallyHidden } from "../styles/utils"
import modifyGrid from "../utils/modify-grid"

import { useIntl } from "gatsby-plugin-intl"

type DataProps = {
  projects: {
    nodes: {
      lang: string
      slug: string
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      __typename: "MdxProject"
    }[]
  }
  pages: {
    nodes: {
      lang: string
      slug: string
      title: string
      cover: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      __typename: "MdxPage"
    }[]
  }
}

const Homepage: React.FC<PageProps<DataProps>> = ({ data: { pages, projects } }) => {
  const rawItems = [...pages.nodes, ...projects.nodes]
  const items = modifyGrid(rawItems)
  const itemsCount = items.length
  let divisor = 9
  
  // Making useIntl available in the code
  const intl = useIntl()
  // Use language iso for the routes
  const locale = intl.locale !== "es" ? `/${intl.locale}` : ""

  for (let i = 0; i < itemsCount; i++) {
    const quotient = itemsCount % divisor
    const quotientAlt = (itemsCount - 1) % divisor

    if (quotient === 0 || quotientAlt === 0) {
      break
    }

    divisor -= 1
  }

  return (
    <Layout>
      <h1 sx={visuallyHidden} data-testid="page-title">
        {locales.home}
      </h1>
      <div className={`item-list-wrapper`} sx={itemListWrapperStyles}>
        <div className={`item-list div${divisor}`}>
          {items.length > 0 ? (
            items.map((item, index) => (
              <GridItem to={ locale + item.slug} className="item" key={item.title} sx={itemStyles} data-testid={item.title}>
                <GatsbyImage
                  loading={index === 0 ? `eager` : `lazy`}
                  image={item.cover.childImageSharp.gatsbyImageData}
                  alt=""
                />
                <span>pepe {item.title}</span>
              </GridItem>
            ))
          ) : (
            <div sx={{ padding: 3 }}>
              No projects and pages found at the locations defined for "projectsPath" and "pagesPath"
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
export default Homepage
