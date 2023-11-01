import { Flex, Spinner } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Flex justifyContent="center" py={{ base: "4", md: "8" }}>
      <Spinner color="brand.200" />
    </Flex>
  );
};

export default LoadingPage;
