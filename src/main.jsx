import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#024fc9",
    800: "#146af5",
    700: "#2977f2",
    600: "#337df2",
    500: "#4287f5",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
    extraBold: 800,
  },
};

const fonts = {
  body: "Tahoma",
  heading: "Courier New",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
