import React from "react";
import {
  Button,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import { AddIcon, SearchIcon } from "@chakra-ui/icons";
import { CiGift } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineNotificationsActive } from "react-icons/md";
export function Navbar() {
  return (
    <Flex
      px="35px"
      borderBottom="0.5px solid rgba(0,0,0,0.1)"
      boxShadow="0px 4px 4px -2px rgba(0, 0, 0, 0.2)"
      pb="30px"
      mb="30px"
    >
      <InputGroup
        width="300px"
        bgColor="white"
        borderRadius="15px"
        boxShadow="md"
      >
        <InputLeftElement>
          <Button bgColor="transparent">
            <SearchIcon color="gray.300" />
          </Button>
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search for anything"
          variant="filled"
          bgColor="white"
          borderRadius="15px"
        />
      </InputGroup>
      <Spacer />
      <HStack spacing="20px">
        <Button
          size="sm"
          leftIcon={<AddIcon />}
          colorScheme="purple"
          variant="solid"
        >
          Create new
        </Button>

        <Icon as={CiGift} boxSize={6} />
        <Icon as={MdOutlineNotificationsActive} boxSize={6} />
        <HStack spacing="5px">
          <Image
            boxSize="30px"
            objectFit="cover"
            src="img/mario.png"
            alt="Dan Abramov"
            borderRadius="full"
          />
          <Text color="GrayText" ml="10px">
            Samicowest
          </Text>
          <Icon as={IoIosArrowDown} />
        </HStack>
      </HStack>
    </Flex>
  );
}
