import React from "react"
import { Link } from "gatsby"
import { Text } from "@chakra-ui/core"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Text fontSize="xl">Hello World</Text>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
