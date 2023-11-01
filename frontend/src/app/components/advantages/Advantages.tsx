import { Flex, Text, Box } from "@chakra-ui/react";
import Wrapper from "../wrapper/Wrapper";

const advantagesItems = [
  {
    id: 1,
    title: "Express Your Creativity",
    description:
      "Are you tired of using the same old memes over and over again? With our Meme Generator, you can unleash your creativity and design custom memes that reflect your unique sense of humor and style.",
  },
  {
    id: 2,
    title: "Boost Your Social Media Presence",
    description:
      "In today's digital world, memes are a powerful tool for social media engagement. Create eye-catching, shareable content that resonates with your audience and watch your likes, shares, and comments soar. ",
  },
  {
    id: 3,
    title: "Spread Laughter and Joy",
    description:
      "Laughter is contagious, and memes are one of the best ways to spread joy. Use our Meme Generator to brighten someone's day with a good laugh. Share memes with friends and family, co-workers, or your online community.",
  },
];

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
