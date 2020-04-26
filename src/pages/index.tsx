import React from "react"
import { Link } from "gatsby"
import { Box, Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Box p={8}>
      <Text fontSize="xl">Hello World</Text>
    </Box>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
