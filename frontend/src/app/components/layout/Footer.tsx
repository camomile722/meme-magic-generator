import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Youtube,
} from "../../theme/icons";
import Wrapper from "../wrapper/Wrapper";
import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <Box bg="gray.200" as="footer">
      <Wrapper>
        <Flex
          justifyContent="space-between"
          alignItems="flex-start"
          flexWrap="wrap"
        >
          <Box>
            <Box>
              <Text as="h4" mb={4} fontSize="xs">
                CUSTOMER CARE
              </Text>

              <UnorderedList
                styleType="none"
                fontSize="xs"
                display="flex"
                flexDirection="column"
                gap={3}
                m="0"
              >
                <ListItem>Help & Contact</ListItem>
                <ListItem>Partner program</ListItem>
                <ListItem>Privacy Policy | Terms of Service</ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Box>
            <Box>
              <Text as="h4" mb={4} fontSize="xs" textTransform="uppercase">
                Contact Us
              </Text>

              <UnorderedList
                styleType="none"
                fontSize="xs"
                display="flex"
                flexDirection="column"
                gap={3}
                m="0"
              >
                <ListItem>support@meme.com</ListItem>
              </UnorderedList>
            </Box>
          </Box>
          <Flex flexDir="column" alignItems="flex-start" gap={3}>
            <Box>
              <Logo />
            </Box>
            <Flex gap={4}>
              <Facebook boxSize="20px" />
              <Instagram boxSize="20px" />
              <Twitter boxSize="20px" />
              <Youtube boxSize="20px" />
              <Pinterest boxSize="20px" />
            </Flex>{" "}
          </Flex>
        </Flex>
        <Flex mt={6}>
          <Text fontSize="xs">
            2023 Meme Generator Pro - All Rights Reserved
          </Text>
        </Flex>
      </Wrapper>
    </Box>
  );
};
