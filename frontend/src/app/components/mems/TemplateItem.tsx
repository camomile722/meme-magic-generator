import { TemplateItemProps } from "@/app/types";
import { Box } from "@chakra-ui/react";
import Image from "next/image";

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
      height={{ base: "250px", md: "250px" }}
      onClick={() => {
        onModalOpen();
        setSelectedTemplate(template);
      }}
      position="relative"
      zIndex={10}
    >
      <Image
        src={template.image?.url}
        alt={template.image?.name}
        fill
        style={{ objectFit: "cover" }}
        quality={100}
        priority
      />
    </Box>
  );
};
