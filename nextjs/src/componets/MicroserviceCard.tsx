import {
  Box,
  Text,
  VStack,
  Link,
  Divider,
  HStack,
  Image,
  Spacer,
  Container,
} from "@chakra-ui/react";
import React from "react";
import { Microservice } from "../types/Microservice";

export const MicroserviceCard = ({
  language,
  href,
  photoUrl,
  description,
}: Microservice) => {
  // Attributes
  // Context
  // Methods
  // Component
  return (
    <Link href={href} isExternal>
      <Container variant="microserviceCard">
        <VStack>
          <Text fontWeight="bold" fontSize="20px">
            {language}
          </Text>
          <Box h="5px" />
          <Divider />
          <Box h="5px" />
          <Text>{description}</Text>
          <Box h="5px" />
          <Divider />
          <Box h="5px" />
          <HStack w="full">
            <Spacer />
            <Image
              alt="microservice-img"
              src={photoUrl}
              width={50}
              height={50}
            />
            <Box w="5px" />
          </HStack>
        </VStack>
      </Container>
    </Link>
  );
};
