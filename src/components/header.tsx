import { Link } from "gatsby"
import { Box, Text, Flex } from "@chakra-ui/core"
import React from "react"

type HeaderProps = {
  siteTitle: string
}

export const Header = ({ siteTitle }: HeaderProps) => (
  <Flex as="header" mb={2} bg="purple.700" justifyContent="center">
    <Box w="960px" px={3} py={5}>
      <Text as="h1" fontSize="xlg">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </Text>
    </Box>
  </Flex>
)
