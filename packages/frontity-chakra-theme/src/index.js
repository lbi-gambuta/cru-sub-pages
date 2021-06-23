import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import processors from "./components/styles/processors";
// import { theme } from "@chakra-ui/react";

const chakraTheme = {
  name: "frontity-chakra-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      logo: "CRU",
      showBackgroundPattern: false,
      showSocialLinks: false,
      socialLinks: [            
        ["facebook", "https://www.instagram.com/frontity/"],
        ["instagram", "https://www.pinterest.com/frontity/"],
        ["twitter", "https://www.twitter.com/frontity/"]
      ],
      menu: [],
      footerMenu:[
        ['Term', '#', ''],
        ['Policy', '#', ''],
        ['Pricing', '#', '']
      ],
      featured: {
        showOnArchive: false,
        showOnPost: true
      },

      colors: {
        primary: {
          'main' : "#0B043F",
          50: "#e9f5f2",
          100: "#d4dcd9",
          200: "#bbc3be",
          300: "#a1aba5",
          400: "#87938b",
          500: "#6d7972",
          600: "#555f58",
          700: "#0B043F", //"#323c34",
          800: "#232924",
          900: "#272727"
        },
        accent: {
          50: "#ede4d3",
          100: "#fbe3b2",
          200: "#f6d086",
          300: "#f1be58",
          400: "#FF00B5", //"#eca419",
          500: "#d49212",
          600: "#a5710b",
          700: "#775105",
          800: "#483100",
          900: "#1d0f00",
          'pink' : '#FF00B5'
        }
      },
      isSearchModalOpen: false,
      isMobileMenuOpen: false,
      autoPreFetch: "all"
    }
  },
  // Actions are functions that modify the state or deal with other parts of
  // Frontity like libraries.
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      }
    }
  },
  libraries: {
    html2react: {
      // Add a processor to html2react so it processes the <img> tags
      // inside the content HTML. You can add your own processors too.
      processors: [image, ...processors]
    }
  }
};

export default chakraTheme;
