import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#10172a", // Retain #10172a as the primary color
            light: "#5d87fd", // Add #5d87fd as a light variant
            contrastText: "#ffffff",
          },
          secondary: {
            main: "#5d87fd", // Use #5d87fd as the secondary color
            contrastText: "#ffffff",
          },
          background: {
            default: "#f5f5f5", // Softer background color for light mode
            paper: "#ffffff",
          },
          text: {
            primary: "#10172a", // Use #10172a for primary text color
            secondary: "#6b6b6b",
          },
        }
      : {
          primary: {
            main: "#90caf9", // Retain #90caf9 as the primary color in dark mode
            light: "#5d87fd", // Add #5d87fd as a light variant
            contrastText: "#121212",
          },
          secondary: {
            main: "#5d87fd", // Use #5d87fd as the secondary color in dark mode
            contrastText: "#121212",
          },
          background: {
            default: "#121212",
            paper: "#1e1e1e",
          },
          text: {
            primary: "#ffffff",
            secondary: "#b0bec5",
          },
        }),
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: mode === "light" ? "#10172a" : "#ffffff", // Use #10172a in light mode
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: mode === "light" ? "#10172a" : "#ffffff", // Use #10172a in light mode
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: mode === "light" ? "#10172a" : "#ffffff", // Use #10172a in light mode
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: mode === "light" ? "#10172a" : "#ffffff", // Use #10172a in light mode
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      color: mode === "light" ? "#10172a" : "#ffffff", // Use #10172a in light mode
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      color: mode === "light" ? "#10172a" : "#ffffff", // Use #10172a in light mode
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Rounded corners
          textTransform: "none", // Disable uppercase text
          padding: "8px 16px",
        },
        containedPrimary: {
          color: mode === "light" ? "#ffffff" : "#121212",
          backgroundColor: mode === "light" ? "#10172a" : "#90caf9", // Use #10172a in light mode
        },
        containedSecondary: {
          color: "#ffffff",
          backgroundColor: "#5d87fd", // Use #5d87fd for secondary buttons
          "&:hover": {
            backgroundColor: mode === "light" ? "#4b6ecd" : "#5d87fd", // Slightly darker on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Softer card edges
          boxShadow:
            mode === "light"
              ? "0 3px 6px rgba(0,0,0,0.1)"
              : "0 3px 6px rgba(0,0,0,0.5)",
          padding: "16px",
          borderColor: mode === "light" ? "#5d87fd" : "#5d87fd", // Use #5d87fd for card borders
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: mode === "light" ? "#10172a" : "#1e1e1e", // Use #10172a in light mode
          color: mode === "light" ? "#ffffff" : "#ffffff",
          boxShadow: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: mode === "light" ? "#10172a" : "#ffffff", // Use #10172a in light mode
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "#5d87fd", // Use #5d87fd for Chip background
          color: "#ffffff", // White text on the chip
        },
      },
    },
  },
});

export default getDesignTokens;

// // theme.jsx
// import { createTheme } from "@mui/material/styles";

// // Define your theme design tokens
// const getDesignTokens = (mode) => ({
//   // Theme configuration based on mode (light/dark)
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           primary: {
//             main: "#10172a",
//           },
//           background: {
//             default: "#ffffff",
//             paper: "#ffffff",
//           },
//         }
//       : {
//           primary: {
//             main: "#90caf9",
//           },
//           background: {
//             default: "#121212",
//             paper: "#424242",
//           },
//         }),
//   },
// });

// export default getDesignTokens;
