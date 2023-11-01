import { Box, Text, Button, Wrap } from "@chakra-ui/react";
import { CustomTooltip } from "../tooltip/CustomTooltip";

export interface HomeBannerProps {
  onDrawerOpen: () => void;
}
export const HomeBanner = ({ onDrawerOpen }: HomeBannerProps) => {
  return (
    <Box pb={{ base: 10, md: 20 }} textAlign="center">
      <Text
        as="h1"
        fontSize={{ base: "3xl", md: "5xl" }}
        fontWeight="extrabold"
      >
        Laugh Out Loud with us!
      </Text>
      <Text as="h2" fontSize={{ base: "xl", md: "3xl" }}>
        Make Memes for Every Mood{" "}
        <Text as="span" color="brand.200" fontWeight="bold" fontSize="4xl">
          :)
        </Text>
      </Text>
      <CustomTooltip label="Create Meme">
        <Button
          bg="brand.200"
          color="white"
          textTransform="uppercase"
          borderRadius="0"
          _hover={{ opacity: 0.8 }}
          mt={{ base: "4", md: "8" }}
          paddingInlineStart={{ base: "1rem", md: "3rem" }}
          paddingInlineEnd={{ base: "1rem", md: "3rem" }}
          fontWeight="bold"
          onClick={onDrawerOpen}
        >
          Create Memes Now
        </Button>
      </CustomTooltip>
    </Box>
  );
};
