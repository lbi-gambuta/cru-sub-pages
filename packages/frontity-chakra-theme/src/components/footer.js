import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { SocialMenu } from "./header/social-menu";
import { connect } from "frontity";
import Logo from './logo'
import Navigation from './header/navigation'

const FooterSection = props => (
  <Box
    as="footer"
    pos="relative"
    bg="#fff"
    py={{ base: "32px", lg: "40px" }}
    {...props}
  />
);

const FooterSectionGroup = props => (
  <SimpleGrid
    columns={{ base: 1, md: 3 }}
    maxWidth="var(--content-width)"
    mx="auto"
    width="90%"
    alignItems="center"
    {...props}
  />
);

const FooterSectionItem = props => (
  <Box padding="24px 0" color="#000" textAlign="center" {...props} />
);

const Footer = ({ state }) => (
  <FooterSection alignSelf="flex-end">
    <FooterSectionGroup>
      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        <Navigation menu={state.theme.footerMenu} className={['cw-footer-nav'].filter(Boolean).join('')} />
      </FooterSectionItem>

      <FooterSectionItem className="cw-logo-copyright">
        <Logo/>
        © {new Date().getFullYear()} - All Rights Reserved
      </FooterSectionItem>

      <FooterSectionItem
        fontWeight="bold"
        fontFamily="heading"
        textTransform="uppercase"
      >
        <SocialMenu
          ml="0"
          justifyContent="flex-end"
          menu={state.theme.socialLinks}
        />
      </FooterSectionItem>
    </FooterSectionGroup>
  </FooterSection>
);

export default connect(Footer);
