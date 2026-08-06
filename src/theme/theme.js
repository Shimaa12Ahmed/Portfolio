import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },

  colors: {
    brand: {
  50: "#FDF2F4",  
  100: "#FADEE3", 
  200: "#F3BCC6", 
  300: "#E48F9E",
  400: "#D26276", 
  500: "#B83B5E", 
  600: "#962A47", 
  700: "#741E34", 
  800: "#521222", 
  900: "#300812",
},

    gray: {
      50: "#FAFAFC",
      100: "#F5F7FB",
      200: "#ECEFF5",
      300: "#DDE2EC",
      400: "#C7CEDC",
      500: "#8B95A7",
      600: "#667085",
      700: "#475467",
      800: "#344054",
      900: "#1F2937",
    },
  },

  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', sans-serif",
  },

  styles: {
    global: {
      html: {
        scrollBehavior: "smooth",
      },

      body: {
        bg: "gray.50",
        color: "gray.900",
        overflowX: "hidden",
      },

      "*::selection": {
        background: "#5B7FFF",
        color: "white",
      },

      section: {
        paddingTop: "100px",
        paddingBottom: "100px",
      },
    },
  },

  components: {
    Button: {
      defaultProps: {
        colorScheme: "brand",
      },

      baseStyle: {
        rounded: "xl",
        fontWeight: "600",
        transition: ".3s",
      },

      variants: {
        solid: {
          bg: "brand.500",
          color: "white",

          _hover: {
            bg: "brand.600",
            transform: "translateY(-3px)",
            boxShadow: "xl",
          },
        },

        outline: {
          border: "2px solid",
          borderColor: "brand.500",
          color: "brand.500",

          _hover: {
            bg: "brand.500",
            color: "white",
          },
        },
      },
    },

    Card: {
      baseStyle: {
        container: {
          bg: "white",
          borderRadius: "24px",
          border: "1px solid",
          borderColor: "gray.200",
          boxShadow: "sm",
          transition: ".3s",

          _hover: {
            transform: "translateY(-5px)",
            boxShadow: "lg",
          },
        },
      },
    },

    Input: {
      defaultProps: {
        variant: "filled",
      },
    },

    Textarea: {
      defaultProps: {
        variant: "filled",
      },
    },

    Badge: {
      baseStyle: {
        rounded: "full",
        px: 3,
        py: 1,
      },
    },

    Heading: {
      baseStyle: {
        color: "gray.900",
        fontWeight: "700",
      },
    },

    Text: {
      baseStyle: {
        color: "gray.600",
      },
    },

    Link: {
      baseStyle: {
        transition: ".3s",

        _hover: {
          color: "brand.500",
          textDecoration: "none",
        },
      },
    },
  },

  shadows: {
    xs: "0 2px 8px rgba(0,0,0,.04)",
    sm: "0 4px 12px rgba(0,0,0,.05)",
    md: "0 10px 25px rgba(0,0,0,.08)",
    lg: "0 20px 40px rgba(0,0,0,.10)",
    xl: "0 30px 60px rgba(0,0,0,.12)",
  },

  layerStyles: {
    section: {
      maxW: "1200px",
      mx: "auto",
      px: {
        base: 6,
        md: 10,
        lg: 16,
      },
    },

    card: {
      bg: "white",
      rounded: "2xl",
      p: 8,
      border: "1px solid",
      borderColor: "gray.200",
      shadow: "md",
    },
  },

  textStyles: {
    heroTitle: {
      fontSize: {
        base: "4xl",
        md: "6xl",
        lg: "7xl",
      },
      fontWeight: "800",
      lineHeight: "1.1",
    },

    sectionTitle: {
      fontSize: {
        base: "3xl",
        md: "4xl",
      },
      fontWeight: "700",
      mb: 4,
    },

    paragraph: {
      fontSize: "lg",
      color: "gray.600",
      lineHeight: "1.9",
    },
  },
});

export default theme;