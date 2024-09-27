import {
  Image,
  Box,
  Heading,
  SimpleGrid,
  Center,
  Icon,
} from "@chakra-ui/react";
import { FaLongArrowAltRight } from "react-icons/fa";

import React from "react";
export function SecondNav() {
  return (
    <SimpleGrid minChildWidth="90px" spacing="20px" px="35px">
      <Box
        bg="white"
        boxShadow="sm"
        borderRadius="10px"
        py="15px"
        pos="relative"
      >
        <Center>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="img/calendar.png"
            alt="Dan Abramov"
          />
        </Center>
        <Heading as="h2" fontSize="16px" px="15px" lineHeight={1}>
          Discover Workshop
        </Heading>
        <Box as="button" pos="absolute" bottom="10px" right="20px">
          <Icon as={FaLongArrowAltRight} size="4" />
        </Box>
      </Box>
      <Box
        bg="white"
        boxShadow="sm"
        borderRadius="10px"
        py="15px"
        pos="relative"
      >
        <Center>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="img/fire.png"
            alt="Dan Abramov"
          />
        </Center>
        <Heading as="h2" fontSize="16px" px="15px" lineHeight={1}>
          Discover Workshop
        </Heading>
        <Box as="button" pos="absolute" bottom="10px" right="20px">
          <Icon as={FaLongArrowAltRight} size="4" />
        </Box>
      </Box>
      <Box
        bg="white"
        boxShadow="sm"
        borderRadius="10px"
        py="15px"
        pos="relative"
      >
        <Center>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="img/cash.png"
            alt="Dan Abramov"
          />
        </Center>
        <Heading as="h2" fontSize="16px" px="15px" lineHeight={1}>
          Discover Workshop
        </Heading>
        <Box as="button" pos="absolute" bottom="10px" right="20px">
          <Icon as={FaLongArrowAltRight} size="4" />
        </Box>
      </Box>
      <Box
        bg="white"
        boxShadow="sm"
        borderRadius="10px"
        py="15px"
        pos="relative"
      >
        <Center>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="img/security.png"
            alt="Dan Abramov"
          />
        </Center>
        <Heading as="h2" fontSize="16px" px="15px" lineHeight={1}>
          Discover Workshop
        </Heading>
        <Box as="button" pos="absolute" bottom="10px" right="20px">
          <Icon as={FaLongArrowAltRight} size="4" />
        </Box>
      </Box>
      <Box
        bg="white"
        boxShadow="sm"
        borderRadius="10px"
        py="15px"
        pos="relative"
      >
        <Center>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="img/creativity.png"
            alt="Dan Abramov"
          />
        </Center>
        <Heading as="h2" fontSize="16px" px="15px" lineHeight={1}>
          Discover Workshop
        </Heading>
        <Box as="button" pos="absolute" bottom="10px" right="20px">
          <Icon as={FaLongArrowAltRight} size="4" />
        </Box>
      </Box>
      <Box
        bg="white"
        boxShadow="sm"
        borderRadius="10px"
        py="15px"
        pos="relative"
      >
        <Center>
          <Image
            boxSize="100px"
            objectFit="cover"
            src="img/bitcoin.png"
            alt="Dan Abramov"
          />
        </Center>
        <Heading as="h2" fontSize="16px" px="15px" lineHeight={1}>
          Discover Workshop
        </Heading>
        <Box as="button" pos="absolute" bottom="10px" right="20px">
          <Icon as={FaLongArrowAltRight} size="4" />
        </Box>
      </Box>
    </SimpleGrid>
  );
}
