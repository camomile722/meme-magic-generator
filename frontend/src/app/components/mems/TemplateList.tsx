"use client";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Wrapper from "../wrapper/Wrapper";
import { TemplateItem } from "./TemplateItem";

export interface TemplatesDataProps {
  id: string;
  image: {
    name: string;
    url: string;
  };

  category: string;
  tags: string;
}

export interface TemplateListProps {
  templates: TemplatesDataProps[];
  setSelectedTemplate: (template: TemplatesDataProps) => void;
  onModalOpen: () => void;
}
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

        <Flex gap="2" pb={10} flexWrap="wrap" justifyContent="space-between">
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
