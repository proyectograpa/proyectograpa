import { IGatsbyImageData } from "gatsby-plugin-image"
//import { filterByLang } from "./resolver-templates";
//import { filterBySlug } from "@lekoarts/gatsby-theme-jodie/src/utils/resolver-templates";
import { useIntl } from "gatsby-plugin-intl"

export interface IGridItem {
  lang: string
  slug: string
  title: string
  shortTitle: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}

export interface IGridProject{
  lang: string
  slug: string
  shortTitle: string
  cover: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  __typename: "MdxProject" | "MdxPage"
}


function defaultResolver(data: IGridItem[]): IGridItem[] {
  //console.log(data)
  return data
}

export function filterByLang(
    data: IGridItem[],
    langFilter: string[]
  ) {
  return data.filter((d) => langFilter.includes(d.lang))
}

function modifyGrid(
    data: IGridItem[],
    //resolver = defaultResolver
    resolver = filterByLang
  ): IGridItem[] {
  console.log(data)
  //return resolver(data)
  let intl = useIntl()
  //lengua = (intl.locale !== null) ? intl.locale  : 'es';
  return resolver(data, [intl.locale, null])
}

/**
 * Examples:
 *
 * You can import the onlyPages() function to filter out everything but pages:
 *
 * const modifyGrid = data => onlyPages(data)
 *
 * You can also do more sophisticated filtering, like the filterBySlug() function that also takes in a second parameter (an array of slugs)
 * You'll need to pass the data in the second argument:
 *
 * const modifyGrid = (data) => filterBySlug(data, ["/about"])
 */
export default modifyGrid