import Dashboard from "./Dashboard";

import { Container, Grid, GridItem } from "@chakra-ui/react";
import React from "react";

import Sidebar from "./Sidebar";

export default function App() {
  return (
    <Container maxW="1400px">
      <Grid
        templateColumns="repeat(6, 1fr)"
        h="1020px"
        bg="whitesmoke"
        borderRadius="15px"
        m="15px"
      >
        <Sidebar />
        <Dashboard />
      </Grid>
    </Container>
  );
}
