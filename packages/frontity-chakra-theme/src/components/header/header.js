import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import MobileMenu from "../menu";
import Logo from '../logo';
import { isUrl, omitConnectProps } from "../helpers";
import { connect } from "frontity";

const SiteHeader = props => (
  <Box
    as="header"
    transition="transform ease .25s"
    width="100%"
    pos="fixed"
    top="0"
    left="0"
    bg="#fff"
    zIndex="90"
    {...props}
  />
);

const SiteHeaderInner = props => (
  <Flex
    align="center"
    width={{ base: "auto", sm: "92%" }}
    mx="auto"
    height={{ base: "60px", md: "95px"}}
    maxW="var(--content-width)"
    justifyContent = "space-between"

    {...props}
  />
);

/*const Logo = ({ isImage = true, src }) =>
  isImage ? (
    <Box as="img" src={src} width="120px" />
  ) : (
      <Box
        fontSize="2xl"
        color="white"
        fontFamily="heading"
        textTransform="uppercase"
        fontWeight="bold"
      >
        {src}
      </Box>
    );*/

const SiteLogo = connect(({ state, ...props }) => {
  // check if the logo is a url,
  // we assume, if it's a url, it points to an image, else it's a text
  const isImage = isUrl(state.theme.logo);
  return (
    <Box display="block" flexShrink="0" {...omitConnectProps(props)}>
      <Logo />
    </Box>
  );
});

const Header = ({ children, ...props }) => (
  <SiteHeader {...props}>
    <SiteHeaderInner>
      <MobileMenu />
      <SiteLogo />
      {children}
    </SiteHeaderInner>
  </SiteHeader>
);

export default Header;
