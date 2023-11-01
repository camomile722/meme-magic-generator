import { Text } from "@chakra-ui/react";
export const Logo = () => {
  return (
    <>
      <Text fontSize="4xl" fontWeight="bold">
        ME
        <Text as="span" color="brand.200">
          ME
        </Text>
      </Text>
      <Text
        fontSize="sm"
        color="gray.500"
        lineHeight="0"
        fontWeight="extrabold"
      >
        Magic
      </Text>
    </>
  );
};
