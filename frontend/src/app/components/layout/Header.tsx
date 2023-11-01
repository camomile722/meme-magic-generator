import { Box } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "../nav/Navbar";
import Wrapper from "../wrapper/Wrapper";
import { HomeBanner } from "../banner/HomeBanner";

export const Header = () => {
  return (
    <Box as="header" bg="brand.50">
      <Wrapper>
        <Navbar />
      </Wrapper>
    </Box>
  );
};
