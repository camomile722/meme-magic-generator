import { Flex, Spinner } from "@chakra-ui/react";

const LoadingPage = () => {
  return (
    <Flex justifyContent="center" py={{ base: "4", md: "8" }}>
      <Spinner />
    </Flex>
  );
};

export default LoadingPage;
