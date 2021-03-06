import { Box, ChakraProvider, Divider, extendTheme, Heading } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools"
import { connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import React from "react";
import Archive from "./archive";
import Footer from "./footer";
import Header from "./header";
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post/post";
import SearchResults from "./search";
import Title from "./title";
import FontFace from "./styles/font-face";
import { Global, css } from "frontity"
import gutenbergStyle from "../styles/gutenberg/style.css";
import gutenbergTheme from "../styles/gutenberg/theme.css";
import mainStyles from "../styles/styles.css";
import UserbackAPI from "./helpers/userback";
import Banner from "./banner";

import CruTeam from "./pages/cru-team";
import Hosting from "./pages/hosting";
import Pricing from "./pages/pricing";

// Theme is the root React component of our theme. The one we will export
// in roots.
const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const curLink = state.router.link

  const breakpoints = createBreakpoints({
    sm: "320px",
    rd: "600px",
    md: "768px",
    lg: "1100px",
    xl: "1200px",
  });

  const overrides = extendTheme({
    fonts: {
      heading: "'Montserrat', sans-serif",
      body: "'Montserrat', sans-serif"
    },
    colors: { ...state.theme.colors },
    breakpoints
  });

  return (
    <ChakraProvider theme={{ ...overrides }}>
      <FontFace />
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <script>
            {` Userback = window.Userback || {};
              Userback.access_token = '10498|21214|4GggS5QJncP9a9sMZ6B4FEhfZ';
              (function(id) {
                var s = document.createElement('script');
                s.async = 1;
                s.src = 'https://static.userback.io/widget/v1.js';
                var parent_node = document.head || document.body;
                parent_node.appendChild(s);
                    })('userback-sdk');

                    Userback.custom_data = {"User Interface":"Frontend"};
                    Userback.email = '';
                    Userback.name = '';`}
        </script>
      </Head>

      <Global styles={css(gutenbergStyle)} />
      <Global styles={css(gutenbergTheme)} />
      <Global styles={css(mainStyles)} />

      {/* Add the header of the site. */}
      <Header />

      {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}
      <Box
        as="main"
        mt={{ base: "60px", md: "95px" }}
        minH="calc(100vh - 320px)"
      >
        <Switch>
          <Loading when={data.isFetching} />
          <SearchResults when={data.isSearch} />
          <Archive when={data.isArchive} />
          <Post when={data.isPostType} />
          <Page404 when={data.is404} />
        </Switch>
        
        {curLink == "/cru-team/" ? <CruTeam /> : ''}
        {curLink == "/hosting-support/" ? <Hosting /> : ''}
        {curLink == "/pricing/" ? <Pricing /> : ''}
      </Box>            
     
      <Banner />
      <Footer />
      <UserbackAPI />
    </ChakraProvider>
  );
};

export default connect(Theme);