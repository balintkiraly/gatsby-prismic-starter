/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { Box, CSSReset, ThemeProvider } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { theme } from "../plugins/chakra-ui/theme"
import { Header } from "./header"

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box p={2} w="960px">
        <Box as="main">{children}</Box>
        <Box as="footer">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
