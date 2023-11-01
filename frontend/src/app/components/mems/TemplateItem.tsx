import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { TemplatesDataProps } from "./TemplateList";

export interface TemplateItemProps {
  template: TemplatesDataProps;
  setSelectedTemplate: (template: TemplatesDataProps) => void;
  onModalOpen: () => void;
}

export const TemplateItem = ({
  template,
  setSelectedTemplate,
  onModalOpen,
}: TemplateItemProps) => {
  return (
    <Box
      key={template.id}
      _hover={{ outline: "2px solid #b14bf4" }}
      width={{ base: "100%", md: "23%" }}
      onClick={() => {
        onModalOpen();
        setSelectedTemplate(template);
        console.log(template);
      }}
    >
      <Image
        src={template.image?.url}
        alt={template.image?.name}
        width={384}
        height={251}
      />
    </Box>
  );
};
