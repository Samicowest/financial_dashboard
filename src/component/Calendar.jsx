import React from "react";
import { Box, Grid, Text, Center, Flex, Heading } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const daysInMonth = 31; // Adjust this based on the actual number of days in the month
const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

const Calendar = () => {
  return (
    <Box p={4} bgColor="white" mt="20px" borderRadius="10px">
      <Flex pb="10px" pt="10px" justifyContent="space-between">
        <ChevronLeftIcon />
        <Heading as="h3" size="sm">
          August
        </Heading>
        <ChevronRightIcon />
      </Flex>
      <Grid
        templateColumns="repeat(7, 1fr)"
        gap={1}
        bgColor="gray.200"
        borderRadius={3}
      >
        {daysOfWeek.map((day) => (
          <Center key={day} p={2} borderRadius="md">
            <Text fontWeight="bold" fontSize="10px">
              {day}
            </Text>
          </Center>
        ))}
      </Grid>
      <Grid templateColumns="repeat(7, 1fr)" gap={1} mt={2}>
        {/* Placeholder for days */}
        {[...Array(daysInMonth)].map((_, index) => (
          <Center key={index + 1} p={1} borderRadius="md">
            <Text fontSize="10px">{index + 1}</Text>
          </Center>
        ))}
      </Grid>
    </Box>
  );
};

export default Calendar;
