import {
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
  Box,
  Center,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { BiRotateLeft, BiTransfer } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa";
import {
  MdAccountBalanceWallet,
  MdMenuOpen,
  MdOutlineStoreMallDirectory,
} from "react-icons/md";
import { TiDocument } from "react-icons/ti";
export default function Sidebar() {
  return (
    <GridItem
      colSpan={1}
      pos="relative"
      borderRight="0.5px solid rgba(0,0,0,0.1)"
      boxShadow="1.5px 0px 1px rgba(0, 0, 0, 0.1)"
    >
      <Box h="100%" p="25px">
        <Flex alignItems="center" mb="50px">
          <Image
            boxSize="40px"
            objectFit="cover"
            src="img/mario.png"
            alt="Dan Abramov"
            borderRadius="full"
          />
          <Text color="GrayText" ml="10px">
            Samicowest
          </Text>
        </Flex>
        <Flex
          _hover={{ ml: "5px" }}
          as="button"
          alignItems="center"
          color="purple.600"
          mb="20px"
        >
          <Icon as={MdMenuOpen} /> <Text ml="10px">Overview</Text>
        </Flex>
        <Flex
          _hover={{ ml: "5px", color: "purple.300" }}
          as="button"
          alignItems="center"
          mb="20px"
        >
          <Icon as={BiTransfer} /> <Text ml="10px">Transactions</Text>
        </Flex>
        <Flex
          _hover={{ ml: "5px", color: "purple.300" }}
          as="button"
          alignItems="center"
          mb="20px"
        >
          <Icon as={MdAccountBalanceWallet} />
          <Text ml="10px">Investing</Text>
        </Flex>
        <Flex
          _hover={{ ml: "5px", color: "purple.300" }}
          as="button"
          alignItems="center"
          mb="20px"
        >
          <Icon as={FaCreditCard} /> <Text ml="10px">Cards</Text>
        </Flex>
        <Flex
          _hover={{ ml: "5px", color: "purple.300" }}
          as="button"
          alignItems="center"
          mb="20px"
        >
          <Icon as={MdOutlineStoreMallDirectory} />
          <Text ml="10px">Store</Text>
        </Flex>
        <Flex
          _hover={{ ml: "5px", color: "purple.300" }}
          as="button"
          alignItems="center"
          mb="20px"
        >
          <Icon as={TiDocument} />
          <Text ml="10px">Statements</Text>
        </Flex>
      </Box>
      <Box
        pos="absolute"
        bottom="20px"
        width="200px"
        left="10px"
        bgColor="orange.300"
        borderRadius="10px"
      >
        <Box
          mt="40px"
          bgColor="white"
          pos="relative"
          pt="50px"
          pb="10px"
          px="10px"
          borderRadius="10px"
        >
          <Box>
            <Heading as="h2" fontSize="14px" fontWeight="200" mb="15px">
              Upgrade to Pro Plan
            </Heading>
            <Text fontSize="13px" mb="20px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis cum soluta.
            </Text>
            <Center>
              <Button
                colorScheme="purple"
                size="sm"
                variant="outline"
                px="15px"
                mx="auto"
              >
                Go Pro
              </Button>
            </Center>
          </Box>

          <Center pos="absolute" left="-5px" top="-120px" width="full">
            <Image
              boxSize="180px"
              objectFit="cover"
              src="img/rocket.png"
              alt="Dan Abramov"
              borderRadius="full"
              transform="rotate(40deg)"
            />
          </Center>
        </Box>
      </Box>
    </GridItem>
  );
}
