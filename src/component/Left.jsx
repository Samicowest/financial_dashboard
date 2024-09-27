import React from "react";
import { BiTransfer } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaStoreAlt,
} from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";

import { RiLoader3Line } from "react-icons/ri";

import { AddIcon, ArrowRightIcon, Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  GridItem,
  HStack,
  Spacer,
  Text,
  Image,
  Box,
  Heading,
  Grid,
  Circle,
} from "@chakra-ui/react";

export function Left() {
  return (
    <GridItem colSpan={2} bg="white" borderRadius="15px" py="10px" px="20px">
      <HStack borderBottom="0.5px solid rgba(0,0,0,0.1)" py="20px" mb="20px">
        <Icon as={CgProfile} size={4} />{" "}
        <Heading as="h4" fontSize="14px">
          My Account
        </Heading>
      </HStack>
      <Flex mb="20px">
        <HStack spacing="5px">
          <Image
            boxSize="40px"
            objectFit="cover"
            src="img/flag.png"
            alt="Dan Abramov"
            borderRadius="full"
          />
          <Box as="button">
            <Icon as={IoIosArrowDown} />
          </Box>
          <Heading as="h2" color="green" fontSize="24px" pl="15px">
            $25,000.00
          </Heading>
        </HStack>
        <Spacer />
        <HStack spacing="10px">
          <Button
            size="xs"
            leftIcon={<AddIcon />}
            bg="purple.300"
            color="purple.700"
            variant="solid"
            px="15px"
          >
            Add
          </Button>
          <Button
            size="xs"
            leftIcon={<FaLongArrowAltRight />}
            bg="purple.300"
            color="purple.700"
            variant="solid"
            px="15px"
          >
            Send
          </Button>
          <Button
            size="xs"
            leftIcon={<RiLoader3Line />}
            bg="purple.300"
            color="purple.700"
            variant="solid"
            px="15px"
          >
            Exchange
          </Button>
          <Circle p="5px" bg="gray.400">
            <Icon as={BsThreeDots} borderRadius="full" size={10} />
          </Circle>
        </HStack>
      </Flex>
      <Heading
        as="h6"
        fontSize="18px"
        color="GrayText"
        fontWeight="bold"
        my="15px"
      >
        Transactions History
      </Heading>
      <Box
        pr="10px"
        h="450px"
        overflowY="scroll"
        sx={{
          "&::-webkit-scrollbar": {
            width: "3px",
          },
          "&::-webkit-scrollbar-track": {
            background: "gray.200",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "gray.500",
            borderRadius: "24px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "gray.700",
          },
        }}
      >
        <Flex mb="20px" borderBottom="0.5px solid rgba(0,0,0,0.1)" py="10px">
          <Circle as="button" size="30px" bg="gray.300">
            <Icon as={FaLongArrowAltRight} size="4" />
          </Circle>
          <Box ml="20px">
            <Heading as="h2" fontSize="18px">
              Transfer to Mike David
            </Heading>
            <HStack>
              <Text fontSize="14px" color="gray.300">
                22/10/2020
              </Text>
              <Text fontSize="12px" color="gray.300">
                12:52
              </Text>
              <Text fontSize="12px" color="gray.300">
                Send Funds
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <Text as="p" fontSize="14px" color="red.600">
              -$254.00
            </Text>
            <Text color="gray.300" fontSize="12px">
              $0.00 Fee
            </Text>
          </Box>
        </Flex>
        <Flex mb="20px" py="10px" borderBottom="0.5px solid rgba(0,0,0,0.1)">
          <Circle as="button" size="30px" bg="gray.300">
            <Icon as={FaLongArrowAltLeft} size="4" />
          </Circle>
          <Box ml="20px">
            <Heading as="h2" fontSize="18px">
              Refund Amazon
            </Heading>
            <HStack>
              <Text fontSize="14px" color="gray.300">
                22/10/2020
              </Text>
              <Text fontSize="12px" color="gray.300">
                12:52
              </Text>
              <Text fontSize="12px" color="gray.300">
                Refund Amazon
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <Text as="p" fontSize="14px" color="green.600">
              +$50.00
            </Text>
            <Text color="gray.300" fontSize="12px">
              $0.00 Fee
            </Text>
          </Box>
        </Flex>
        <Flex mb="20px" py="10px" borderBottom="0.5px solid rgba(0,0,0,0.1)">
          <Circle as="button" size="30px" bg="gray.300">
            <Icon as={BiTransfer} size={4} />
          </Circle>
          <Box ml="20px">
            <Heading as="h2" fontSize="18px">
              Exchange
            </Heading>
            <HStack>
              <Text fontSize="14px" color="gray.300">
                22/10/2020
              </Text>
              <Text fontSize="12px" color="gray.300">
                12:52
              </Text>
              <Text fontSize="12px" color="gray.300">
                Sent Funds
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <Text as="p" fontSize="14px" color="green.600">
              +$50.00
            </Text>
            <Text color="gray.300" fontSize="12px">
              $0.00 Fee
            </Text>
          </Box>
        </Flex>
        <Flex mb="20px" borderBottom="0.5px solid rgba(0,0,0,0.1)" py="10px">
          <Circle as="button" size="30px" bg="gray.300">
            <Icon as={FaLongArrowAltRight} size="4" />
          </Circle>
          <Box ml="20px">
            <Heading as="h2" fontSize="18px">
              Transfer to Antoni Green
            </Heading>
            <HStack>
              <Text fontSize="14px" color="gray.300">
                22/10/2020
              </Text>
              <Text fontSize="12px" color="gray.300">
                12:52
              </Text>
              <Text fontSize="12px" color="gray.300">
                Send Funds
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <Text as="p" fontSize="14px" color="red.600">
              -$154.00
            </Text>
            <Text color="gray.300" fontSize="12px">
              $0.00 Fee
            </Text>
          </Box>
        </Flex>
        <Flex mb="20px" py="10px" borderBottom="0.5px solid rgba(0,0,0,0.1)">
          <Circle as="button" size="30px" bg="gray.300">
            <Icon as={FaStoreAlt} size="4" />
          </Circle>
          <Box ml="20px">
            <Heading as="h2" fontSize="18px">
              Tesco Stoe
            </Heading>
            <HStack>
              <Text fontSize="14px" color="gray.300">
                22/10/2020
              </Text>
              <Text fontSize="12px" color="gray.300">
                12:52
              </Text>
              <Text fontSize="12px" color="gray.300">
                Refund Amazon
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <Text as="p" fontSize="14px" color="green.600">
              -$50.00
            </Text>
            <Text color="gray.300" fontSize="12px">
              $10.00 Fee
            </Text>
          </Box>
        </Flex>
        <Flex mb="20px" py="10px" borderBottom="0.5px solid rgba(0,0,0,0.1)">
          <Circle as="button" size="30px" bg="gray.300">
            <Icon as={FaStoreAlt} size="4" />
          </Circle>
          <Box ml="20px">
            <Heading as="h2" fontSize="18px">
              Tesco Stoe
            </Heading>
            <HStack>
              <Text fontSize="14px" color="gray.300">
                22/10/2020
              </Text>
              <Text fontSize="12px" color="gray.300">
                12:52
              </Text>
              <Text fontSize="12px" color="gray.300">
                Refund Amazon
              </Text>
            </HStack>
          </Box>
          <Spacer />
          <Box>
            <Text as="p" fontSize="14px" color="green.600">
              +$50.00
            </Text>
            <Text color="gray.300" fontSize="12px">
              $0.00 Fee
            </Text>
          </Box>
        </Flex>
      </Box>
    </GridItem>
  );
}
