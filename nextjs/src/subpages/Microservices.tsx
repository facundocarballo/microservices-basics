import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import { MICROSERVICES_DATA } from "../handlers/Microservices";
import { MicroserviceCard } from "../componets/MicroserviceCard";
import { GetKeyIterator } from "../handlers/iterators";

export const Microservices = () => {
  // Attributes
  // Context
  // Methods
  // Component
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      {MICROSERVICES_DATA.map((service, idx) => (
        <GridItem key={GetKeyIterator(idx)}>
          <MicroserviceCard
            description={service.description}
            href={service.href}
            language={service.language}
            photoUrl={service.photoUrl}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
