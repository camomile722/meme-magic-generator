"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import Wrapper from "../wrapper/Wrapper";
import { TemplateItem } from "./TemplateItem";
import { TemplateListProps } from "@/app/types";

const TemplateList = ({
  templates,
  setSelectedTemplate,
  onModalOpen,
}: TemplateListProps) => {
  return (
    <Box bg="#1a202c">
      <Wrapper>
        <Text
          color="white"
          as="h2"
          fontSize={{ base: "xl", md: "4xl" }}
          py="4"
          fontWeight="bold"
        >
          Popular Templates
        </Text>

        <Flex
          gap={{ base: 6, md: 2 }}
          pb={10}
          flexWrap="wrap"
          justifyContent="space-between"
        >
          {templates.map((template) => (
            <TemplateItem
              key={template.id}
              template={template}
              setSelectedTemplate={setSelectedTemplate}
              onModalOpen={onModalOpen}
            />
          ))}
        </Flex>
      </Wrapper>
    </Box>
  );
};

export default TemplateList;
