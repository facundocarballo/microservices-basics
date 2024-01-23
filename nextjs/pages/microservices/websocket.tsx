import { Box, Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function DatabaseMicroservice() {
  return (
    <>
      <Head>
        <title>Web Socket Microservice</title>
        <meta
          name="description"
          content="Basic app to explain microservices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w="full">
        <Box h='15px' />
        <Heading>Web Socket Microservice with Golang</Heading>
      </VStack>
    </>
  );
}
