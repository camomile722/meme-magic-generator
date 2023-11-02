import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import html2canvas from "html2canvas";
import download from "downloadjs";
import { UploadFileInput } from "./UploadFileInput";
import { ControlPanel } from "../panel/ControlPanel";
import { Logo } from "../layout/Logo";
import { CustomMenu } from "../menu/CustomMenu";
import { ArrowDown } from "@/app/theme/icons";
import {
  fileExtensionOptions,
  fontSizeOptions,
  selectFontOptions,
} from "@/app/data/options";
import { CustomTextArea } from "./CustomTextArea";
import { MemeContainer } from "../mems/MemeContainer";
import { UploadFormProps } from "@/app/types";

export const UploadForm = ({ onClose, isOpen }: UploadFormProps) => {
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
      formik.setErrors({});
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

  const memeContainerRef = useRef(null);

  const handleDownload = (selectedFileExtension: string) => {
    if (memeContainerRef.current && selectedFileExtension) {
      // Capture the edited image from the memeContainer
      html2canvas(memeContainerRef.current).then((canvas) => {
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
              <MemeContainer
                memeContainerRef={memeContainerRef}
                formik={formik}
                colorTextTop={colorTextTop}
                colorTextBottom={colorTextBottom}
                alignTextBottom={alignTextBottom}
                alignTextTop={alignTextTop}
                fontSizeBottom={fontSizeBottom}
                fontSizeTop={fontSizeTop}
                fontFamilyBottom={fontFamilyBottom}
                fontFamilyTop={fontFamilyTop}
                textBottom={textBottom}
                textTop={textTop}
              />
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

              <CustomTextArea
                formik={formik}
                fieldName="textTop"
                placeholder="Text Top"
              >
                <ControlPanel
                  setAlignText={setAlignTextTop}
                  setCustomOption={setFontFamilyTop}
                  selectFontOptions={selectFontOptions}
                  setFontSize={setFontSizeTop}
                  fontSizeOptions={fontSizeOptions}
                  setColorText={setColorTextTop}
                  textColor={colorTextTop}
                />
              </CustomTextArea>

              <CustomTextArea
                formik={formik}
                placeholder="Text Bottom"
                fieldName="textBottom"
              >
                <ControlPanel
                  setAlignText={setAlignTextBottom}
                  setCustomOption={setFontFamilyBottom}
                  selectFontOptions={selectFontOptions}
                  setFontSize={setFontSizeBottom}
                  fontSizeOptions={fontSizeOptions}
                  setColorText={setColorTextBottom}
                  textColor={colorTextBottom}
                />
              </CustomTextArea>

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
