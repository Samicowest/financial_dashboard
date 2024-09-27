import { Right } from "./component/Right";
import { Left } from "./component/Left";
import { SecondNav } from "./component/SecondNav";
import { Navbar } from "./component/Navbar";
import { GridItem, Grid } from "@chakra-ui/react";
import { CiCalendar, CiCreditCard1 } from "react-icons/ci";
import { MdStackedBarChart } from "react-icons/md";

export default function Dashboard() {
  return (
    <GridItem colSpan={5} py="30px" h="100%">
      <Navbar />
      <SecondNav />
      <Grid gridTemplateColumns="repeat(3, 1fr)" gap={4} px="35px" mt="30px">
        <Left />
        <Right />
      </Grid>
    </GridItem>
  );
}
