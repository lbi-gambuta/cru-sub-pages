import React from "react";
import { Global, css } from "frontity";
import montserrat from "../../fonts/montserrat/Montserrat-Regular.ttf";
import montserratBold from "../../fonts/montserrat/Montserrat-Bold.ttf";
import montserratMed from "../../fonts/montserrat/Montserrat-Medium.ttf";

const FontFace = () => (
  <Global
    styles={css`
      @font-face{
        font-family:Montserrat;
        src: url(${montserratBold}) format ("ttf);
        font-weight: 700;
      }
      @font-face{
        font-family:Montserrat;
        src: url(${montserratMed}) format ("ttf);
        font-weight: medium;
      }
      @font-face{
        font-family:Montserrat;
        src: url(${montserrat}) format ("ttf);
        font-weight: normal;
      }
    `}
  />
);

export default FontFace;
