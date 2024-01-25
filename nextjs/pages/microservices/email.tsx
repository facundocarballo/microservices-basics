import { ApiRequest } from "@/src/handlers/axios";
import { Box, Heading, VStack } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function DatabaseMicroservice() {
  const handleGetData = async () => {
    await ApiRequest.GET("http://localhost:3003")
  }
  React.useEffect(() => {
    handleGetData()
  }, [])
  return (
    <>
      <Head>
        <title>Email Microservice</title>
        <meta
          name="description"
          content="Basic app to explain microservices."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack w="full">
        <Box h="15px" />
        <Heading>Email Microservice with Python</Heading>
      </VStack>
    </>
  );
}
