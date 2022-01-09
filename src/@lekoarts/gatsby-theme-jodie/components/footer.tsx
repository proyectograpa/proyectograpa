/** @jsx jsx */
import { jsx, Link, useThemeUI, get } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "../hooks/use-site-metadata"

import React from "react"

//import { useIntl, Link, FormattedMessage } from "gatsby-plugin-intl"

import { replaceSlashes } from "../utils/replace-slashes"
import useJodieConfig from "../hooks/use-jodie-config"

import { useIntl, FormattedMessage } from "gatsby-plugin-intl"


const Footer = ({ bg }: { bg: string }) => {
  const intl = useIntl()
  const { navigation, basePath } = useJodieConfig()

  const re = '/' + intl.locale
  var current = location.pathname.replace(re, ""); 
  //console.log(current)

  const { siteTitle } = useSiteMetadata()
  const {
    theme: { rawColors },
  } = useThemeUI()

  const text = readableColor(
    bg,
    rawColors!.textMuted as string | undefined,
    rawColors!.textMutedLight as string | undefined
  )

  return (
    <footer
      sx={{
        position: [`relative`, `relative`, `relative`, `fixed`],
        width: (t) => [`100%`, `100%`, `100%`, get(t, `sidebar.normal`), get(t, `sidebar.wide`)],
        bottom: 0,
        color: text,
        fontSize: 0,
        p: [3, 3, 4],
        background: bg,
        a: {
          color: readableColor(bg),
          "&:hover,&:focus": {
            color: readableColor(bg, `primary`, `primaryLight`, false),
          },
        },
        variant: `footer`,
      }}
    >
      <div>
        <Link href={replaceSlashes(`/${basePath}/${current}`)}>
		  Es
        </Link>
        {` | `}
        <Link href={replaceSlashes(`/en/${basePath}/${current}`)}>
		  En
        </Link>
      </div>
      <div>
        &copy; {new Date().getFullYear()}
         {` `}
         {intl.formatMessage({ id: "by" })}
         {` `}
         {siteTitle}.
      </div>
      <div>
        <Link
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-jodie"
        >
        {intl.formatMessage({ id: "theme" })}
        </Link>
        {` `}
        {intl.formatMessage({ id: "by" })}
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=jodie&utm_medium=Theme"
        >
          LekoArts
        </Link>
      </div>
    </footer>
  )
}

export default Footer
