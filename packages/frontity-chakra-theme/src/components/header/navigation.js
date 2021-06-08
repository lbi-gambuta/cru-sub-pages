import { Box, Stack } from "@chakra-ui/react";
import { connect, styled } from "frontity";
import React from "react";
import FrontityLink from "../link";

const Link = styled(FrontityLink)`
  position: relative;
  color: #000;
  text-decoration: none;
  font-weight:600;

  &:after {
    transition: bottom ease 0.25s, background-color ease 0.25s;
    content: "";
    width: 110%;
    height: 5px;
    position: absolute;
    bottom: 0;
    left: -5%;
    background: transparent;
  }

  &.active, &:hover {
    &:after {
      bottom: -7px;
      background-color: ${p => p.theme.colors.accent['pink']};
    }
  }
`;

export const SiteMenu = props => (
  <Stack
    spacing="50px"
    as="ul"
    listStyleType="none"
    align="center"
    direction="row"
    color="white"
    {...props}
  />
);

const SiteMenuItem = ({ link, classes, linkClass, ...props }) => {
  return (  
  <Box
    as="li"
    color="white"
    fontSize={{ base: "sm", lg: "md" }}
    fontWeight="medium"
    textTransform="uppercase"
    position="relative"
    cursor="pointer"
    className={[classes].filter(Boolean).join(' ')}
    {...props}
  >
    <Link link={link} className={[linkClass].filter(Boolean).join(' ')}>{props.children}</Link>
  </Box>
)};

const Navigation = ({ menu, state, ...props }) => {
  const curLink = state.router.link;
  return(
  <Box as="nav" height="100%" overflow="hidden" display={{ base: "none", lg: "block" }} {...props}>
    <SiteMenu>
      {menu.map(([name, link, classes]) => (
        <SiteMenuItem key={name} link={link} classes={classes} linkClass={`${curLink == link  ? "active" : ""}`}>
          {name}
        </SiteMenuItem>
      ))}
    </SiteMenu>
  </Box>
)};

export default connect(Navigation);
