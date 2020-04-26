import React from "react"
import { Link } from "gatsby"
import { Text } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <Text fontSize="xl">Hello World from the second page</Text>
    <Text>Welcome to page 2</Text>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
