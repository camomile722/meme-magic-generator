import { ArrowLeft, ArrowRight } from "@/app/theme/icons";
import { ImageModalProps } from "@/app/types";
import {
  Box,
  Modal,
  ModalContent,
  ModalOverlay,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";

export const ImageModal = ({
  isOpen,
  onClose,
  selectedTemplate,
  setSelectedTemplate,
  templates,
}: ImageModalProps) => {
  const currentIndex =
    selectedTemplate && templates.length > 0
      ? templates.indexOf(selectedTemplate)
      : 0;

  const nextImage = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= templates.length) {
      return setSelectedTemplate(templates[0]);
    }
    setSelectedTemplate(templates[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentIndex - 1;

    if (prevIndex < 0) {
      return setSelectedTemplate(templates[templates.length - 1]);
    }
    setSelectedTemplate(templates[prevIndex]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        {selectedTemplate && (
          <Box>
            <Image
              src={selectedTemplate?.image.url}
              alt={selectedTemplate?.image.name}
              width="300"
              height="300"
              layout="responsive"
              style={{ objectFit: "cover" }}
              quality={100}
            />

            <IconButton
              position="absolute"
              top="50%"
              left="8px"
              bg="black"
              onClick={prevImage}
              aria-label="Close modal"
              icon={<Icon as={ArrowLeft} boxSize="10" color="brand.200" />}
              outline="1px solid #b14bf4"
            />
            <IconButton
              position="absolute"
              top="50%"
              right="8px"
              bg="black"
              onClick={nextImage}
              aria-label="Close modal"
              icon={<Icon as={ArrowRight} boxSize="10" color="brand.200" />}
              outline="1px solid #b14bf4"
            />
          </Box>
        )}
      </ModalContent>
    </Modal>
  );
};
