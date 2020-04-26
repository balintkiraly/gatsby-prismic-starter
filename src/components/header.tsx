import { Link } from "gatsby"
import { Box, Text, Flex } from "@chakra-ui/core"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
