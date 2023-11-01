"use client";
import { Box, useDisclosure } from "@chakra-ui/react";
import { Suspense, useEffect, useState } from "react";

import { templatesData } from "./data/templates";
import TemplateList, {
  TemplatesDataProps,
} from "./components/mems/TemplateList";
import LoadingPage from "./loading";
import { Advantages } from "./components/advantages/Advantages";
import { ImageModal } from "./components/modals/ImageModal";
import { UploadForm } from "./components/form/UploadForm";
import { HomeBanner } from "./components/banner/HomeBanner";

export default function Home() {
  const [templates, setTemplates] = useState<TemplatesDataProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplatesDataProps>();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onCloseModal,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onCloseDrawer,
  } = useDisclosure();
  useEffect(() => {
    const fetchMemsTemplates = async () => {
      const res = await fetch("/api/mems/templates");
      const data = await res.json();
      setTemplates(data);
      setLoading(false);
    };

    fetchMemsTemplates();
  }, []);
  return (
    <main>
      <Box bg="brand.50">
        <HomeBanner onDrawerOpen={onDrawerOpen} />
      </Box>
      <Suspense fallback={<LoadingPage />}>
        <TemplateList
          templates={templates}
          setSelectedTemplate={setSelectedTemplate}
          onModalOpen={onModalOpen}
        />
        <Advantages />
        <ImageModal
          templates={templates}
          isOpen={isModalOpen}
          onClose={onCloseModal}
          selectedTemplate={selectedTemplate}
          setSelectedTemplate={setSelectedTemplate}
        />
      </Suspense>
      <Box width="100%">
        <UploadForm
          templates={templates}
          setTemplates={setTemplates}
          onClose={onCloseDrawer}
          isOpen={isDrawerOpen}
        />
      </Box>
    </main>
  );
}
