import { connect } from "frontity";
import React from "react";
import MainHeader from "./header";
import Navigation from "./navigation";
import SocialNav from "./social-menu";
import { SearchButton, SearchModal, SearchForm } from "../search";

const Header = ({ state, actions }) => (
  <MainHeader>
    <Navigation menu={state.theme.menu} />
    {state.theme.showSocialLinks && (
      <SocialNav menu={state.theme.socialLinks} />
    )}
  </MainHeader>
);

export default connect(Header);
