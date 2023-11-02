import React, { use, useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { UploadFileInput } from "./UploadFileInput";
import { TemplatesDataProps } from "../mems/TemplateList";
import Image from "next/image";
import { ControlPanel } from "../panel/ControlPanel";
import { Logo } from "../layout/Logo";
import { CustomMenu } from "../menu/CustomMenu";
import { ArrowDown } from "@/app/theme/icons";
import html2canvas from "html2canvas";
import download from "downloadjs";
import { comic_neue, inter, pacifico, quicksand } from "@/app/layout";

export interface UploadFormProps {
  templates: TemplatesDataProps[];
  setTemplates: React.Dispatch<React.SetStateAction<TemplatesDataProps[]>>;
  onClose: () => void;
  isOpen: boolean;
}

const fontSizeOptions = [
  { id: "1", value: "2xl", label: "40px" },
  { id: "2", value: "4xl", label: "50px" },
  { id: "3", value: "6xl", label: "60px" },
];

const selectFontOptions = [
  { id: "1", value: quicksand.className, label: "Quicksand" },
  { id: "2", value: comic_neue.className, label: "Comic Neue" },
  { id: "3", value: pacifico.className, label: "Pacifico" },
  { id: "4", value: inter.className, label: "Inter" },
];

const fileExtensionOptions = [
  { id: "1", value: "jpg", label: "JPG" },
  { id: "2", value: "png", label: "PNG" },
  { id: "4", value: "gif", label: "GIF" },
];
export const UploadForm = ({
  templates,
  setTemplates,
  onClose,
  isOpen,
}: UploadFormProps) => {
  const validationSchema = Yup.object().shape({
    image: Yup.object().shape({
      name: Yup.string().required("Please select an image"),
    }),
  });
  const formik = useFormik({
    initialValues: {
      id: Date.now().toString(36) + Math.random().toString(36),
      image: {
        name: "",
        url: "",
      },
      textBottom: "",
      textTop: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      // setTemplates([values, ...templates]);

      // onClose();
      formik.setErrors({});
      // formik.resetForm();
    },
  });

  const { textBottom, textTop } = formik.values;
  const [alignTextTop, setAlignTextTop] = useState("");
  const [alignTextBottom, setAlignTextBottom] = useState("");
  const [fontFamilyTop, setFontFamilyTop] = useState("");
  const [fontFamilyBottom, setFontFamilyBottom] = useState("");
  const [fontSizeTop, setFontSizeTop] = useState("");
  const [fontSizeBottom, setFontSizeBottom] = useState("");
  const [colorTextTop, setColorTextTop] = useState("#000000");
  const [colorTextBottom, setColorTextBottom] = useState("#000000");
  const [fileExtension, setFileExtension] = useState("");

  const memeContainer = useRef(null);
  console.log("formik.errors?.image?.name ", formik.errors?.image?.name);

  const handleDownload = (selectedFileExtension: string) => {
    if (memeContainer.current && selectedFileExtension) {
      // Capture the edited image from the memeContainer
      html2canvas(memeContainer.current).then((canvas) => {
        // Convert the captured canvas to a data URL
        const dataUrl = canvas.toDataURL(`image/${selectedFileExtension}`);

        // Trigger the download using the downloadjs library
        download(
          dataUrl,
          `meme.${selectedFileExtension}`,
          `image/${selectedFileExtension}`
        );
      });
    }
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={() => {
        onClose();
        formik.setErrors({});
        formik.resetForm();
      }}
      size={formik.values?.image.name ? "full" : "md"}
    >
      <DrawerOverlay />
      <DrawerContent p={6} maxHeight="100vh" overflowY="auto">
        <DrawerCloseButton />
        <DrawerHeader px="0" mb={4}>
          <Logo />
        </DrawerHeader>
        <form encType="file" onSubmit={formik.handleSubmit}>
          <Flex
            justifyContent="space-between"
            gap={4}
            flexDir={{ base: "column", md: "row" }}
          >
            {formik.values?.image.name !== "" && (
              <Box
                width={
                  formik.values?.image.name !== ""
                    ? { base: "100%", md: "60%" }
                    : "100%"
                }
                position="relative"
                height={{ base: "300px", md: "500px" }}
                id="meme-container"
                ref={memeContainer}
              >
                <Box
                  color={colorTextTop}
                  position="absolute"
                  zIndex="20"
                  top={6}
                  left={
                    alignTextTop === "center"
                      ? "50%"
                      : alignTextTop === "right"
                      ? ""
                      : "6"
                  }
                  right={alignTextTop === "right" ? "6" : ""}
                  fontSize={fontSizeTop}
                  fontWeight="extrabold"
                  fontFamily={fontFamilyTop}
                  className={fontFamilyTop}
                  transform={
                    alignTextTop === "center" ? "translateX(-50%)" : "none"
                  }
                >
                  <Text>{textTop}</Text>
                </Box>
                <Image
                  src={formik.values.image?.url}
                  alt={formik.values.image?.name}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                <Box
                  color={colorTextBottom}
                  position="absolute"
                  zIndex="20"
                  bottom={6}
                  left={
                    alignTextBottom === "center"
                      ? "50%"
                      : alignTextBottom === "right"
                      ? ""
                      : "6"
                  }
                  right={alignTextBottom === "right" ? "6" : ""}
                  fontSize={fontSizeBottom}
                  fontWeight="extrabold"
                  fontFamily={fontFamilyBottom}
                  className={fontFamilyBottom}
                  transform={
                    alignTextBottom === "center" ? "translateX(-50%)" : "none"
                  }
                >
                  <Text>{textBottom}</Text>
                </Box>
              </Box>
            )}
            <Flex
              gap={6}
              alignItems="center"
              flexDir="column"
              width={
                formik.values?.image.name !== ""
                  ? { base: "100%", md: "40%" }
                  : "100%"
              }
            >
              <UploadFileInput formik={formik} />

              <FormControl>
                <ControlPanel
                  setAlignText={setAlignTextTop}
                  setCustomOption={setFontFamilyTop}
                  selectFontOptions={selectFontOptions}
                  setFontSize={setFontSizeTop}
                  fontSizeOptions={fontSizeOptions}
                  setColorText={setColorTextTop}
                  textColor={colorTextTop}
                />
                <Textarea
                  size="md"
                  placeholder="Text Top"
                  {...formik.getFieldProps("textTop")}
                  _focus={{
                    borderColor: "gray.300",
                    boxShadow: "sm",
                    borderWidth: "2px",
                  }}
                  mt={2}
                />
              </FormControl>

              <FormControl>
                <ControlPanel
                  setAlignText={setAlignTextBottom}
                  setCustomOption={setFontFamilyBottom}
                  selectFontOptions={selectFontOptions}
                  setFontSize={setFontSizeBottom}
                  fontSizeOptions={fontSizeOptions}
                  setColorText={setColorTextBottom}
                  textColor={colorTextBottom}
                />
                <Textarea
                  size="md"
                  placeholder="Text Bottom"
                  {...formik.getFieldProps("textBottom")}
                  _focus={{
                    borderColor: "gray.300",
                    boxShadow: "sm",
                    borderWidth: "2px",
                  }}
                  mt={2}
                />
              </FormControl>

              <CustomMenu
                customOptions={fileExtensionOptions}
                setCustomOption={setFileExtension}
                menuButtonIconRight={<ArrowDown />}
                buttonLabel="Download as"
                tooltipLabel="Download file as"
                onClick={handleDownload}
                disabled={formik.errors?.image?.name !== undefined}
              />
            </Flex>
          </Flex>
        </form>
      </DrawerContent>
    </Drawer>
  );
};
