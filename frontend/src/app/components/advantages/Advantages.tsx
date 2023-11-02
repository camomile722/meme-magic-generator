import { Flex, Text, Box } from "@chakra-ui/react";
import Wrapper from "../wrapper/Wrapper";
import { advantagesItems } from "@/app/data/advantages";

export const Advantages = () => {
  return (
    <Wrapper>
      <Flex justifyContent="space-between" py={10} flexWrap="wrap" gap="4">
        {advantagesItems.map((item) => (
          <Box key={item.id} w={{ base: "100%", md: "30%" }}>
            <Text as="h2" mb={4} fontWeight="bold" color="brand.200">
              {item.title}
            </Text>
            <Text>{item.description}</Text>
          </Box>
        ))}
      </Flex>
    </Wrapper>
  );
};
