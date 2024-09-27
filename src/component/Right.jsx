import React from "react";
import NewChart from "../NewChart";
import SwiperSlides from "./SwiperSlides";
import { Icon } from "@chakra-ui/icons";
import {
  Flex,
  GridItem,
  HStack,
  Spacer,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import {
  MdStackedBarChart,
} from "react-icons/md";
import { CiCalendar, CiCreditCard1 } from "react-icons/ci";
export function Right() {
  return (
    <GridItem colSpan={1}>
      <Box bgColor="white" borderRadius="15px" py="10px" px="20px" mb="20px">
        <HStack borderBottom="0.5px solid rgba(0,0,0,0.1)" py="20px" mb="20px">
          <Icon as={MdStackedBarChart} fontSize="25px" />{" "}
          <Heading as="h4" fontSize="14px">
            Balance
          </Heading>
        </HStack>

        <Flex>
          <Box width="47%">
            <NewChart />
            <Flex bg="gray.300" px="20px" ml="10px" alignItems="center">
              <Heading as="h2" fontSize="15px">
                May 2021
              </Heading>
              <Icon as={CiCalendar} fontSize="20px" />
            </Flex>
          </Box>
          <Spacer />
          <Box py="20px">
            <Box>
              <Text as="p" fontSize="14px" color="GrayText" textAlign="right">
                Incoming
              </Text>
              <Heading
                as="h4"
                fontSize="16px"
                sx={{
                  textAlign: "right",
                }}
              >
                $203.20
              </Heading>
            </Box>
            <Box
              py="10px"
              sx={{
                borderBottom: "1px solid gray",
              }}
            >
              <Text as="p" fontSize="14px" color="GrayText" textAlign="right">
                Outcoming
              </Text>
              <Heading
                as="h4"
                fontSize="16px"
                sx={{
                  textAlign: "right",
                }}
              >
                $203.20
              </Heading>
            </Box>
            <Box py="5px">
              <Text
                as="p"
                fontSize="14px"
                color="GrayText"
                textAlign="right"
                sx={{
                  fontWeight: "bolder",
                }}
              >
                balance
              </Text>
              <Heading
                as="h4"
                fontSize="16px"
                sx={{
                  color: "red.400",
                  fontWeight: "bolder",
                }}
              >
                -$203.20
              </Heading>
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box
        bgColor="white"
        borderRadius="15px"
        py="10px"
        px="20px"
        width="400px"
      >
        <HStack borderBottom="0.5px solid rgba(0,0,0,0.1)" py="20px" mb="20px">
          <Icon as={CiCreditCard1} fontSize="25px" />{" "}
          <Heading as="h4" fontSize="14px">
            My Cards
          </Heading>
        </HStack>
        <Box width="100%" objectFit="cover">
          <SwiperSlides />
        </Box>
      </Box>
    </GridItem>
  );
}
