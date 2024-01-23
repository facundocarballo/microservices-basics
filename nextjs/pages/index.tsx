import { Navbar } from "@/src/componets/Navbar";
import { Microservices } from "@/src/subpages/Microservices";
import { Box, Divider, VStack } from "@chakra-ui/react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Microservices - Basic</title>
        <meta
          name="description"
          content="Basic app to explain microservices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w="full">
        <Box h="15px" />
        <Navbar />
        <Box h="15px" />
        <Divider />
        <Box h="15px" />
        <Microservices />
      </VStack>
    </>
  );
}
