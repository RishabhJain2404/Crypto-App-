import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";


const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Our mission is to empower individuals and businesses to explore 
            the limitless possibilities of blockchain technology with 
            confidence. We've designed our app to offer a user-friendly and 
            intuitive experience while prioritizing the safety of your investments.
            With a strong focus on cutting-edge security measures and a commitment 
            to staying ahead of the curve in the ever-evolving crypto landscape, we 
            aim to be your trusted partner in your crypto journey.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;