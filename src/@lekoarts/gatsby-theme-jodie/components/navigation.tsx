/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { readableColor } from "polished"
import { replaceSlashes } from "../utils/replace-slashes"
import useJodieConfig from "../hooks/use-jodie-config"

//import { useIntl } from "gatsby-plugin-intl"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"


const Navigation = ({ bg }: { bg: string }) => {
  const intl = useIntl()
  const { navigation, basePath } = useJodieConfig()

  const locale = intl.locale !== "es" ? `/${intl.locale}` : ""
  const re = '/' + intl.locale
  //https://stackoverflow.com/questions/68590841/
  let current = ''
  if (typeof window !== "undefined") {
  	current = location.pathname.replace(re, ""); 
  }
  



  return (
    <nav
      aria-label="Primary Navigation"
      sx={{
        a: {
          color: readableColor(bg),
          textDecoration: `none`,
          fontSize: [1, 2, 2, 3],
          marginLeft: [2, 3, 3, 0],
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        ul: {
          margin: 0,
          padding: 0,
          li: {
            listStyle: `none`,
            display: [`inline-block`, `inline-block`, `inline-block`, `block`],
          },
        },
        variant: `navigation`,
      }}
    >
      <ul>
        {navigation.map((navItem) => (
          <li key={navItem.slug}>
            <Link sx={(t) => ({ ...t.styles?.a })} to={replaceSlashes(`/${locale}/${basePath}/${navItem.slug}`)}>
              
            {intl.formatMessage({ id: navItem.name })}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
