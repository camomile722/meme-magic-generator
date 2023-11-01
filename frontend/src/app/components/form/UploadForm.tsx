import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  FormControl,
  FormHelperText,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SketchPicker } from "react-color";

import { UploadFileInput } from "./UploadFileInput";
import { TemplatesDataProps } from "../mems/TemplateList";
import Image from "next/image";
import { ControlPanel } from "../panel/ControlPanel";
import { Comic_Neue, Inter, Pacifico, Quicksand } from "next/font/google";
import { Logo } from "../layout/Logo";

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

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
});

const comic_neue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

const selectFontOptions = [
  { id: "1", value: quicksand.className, label: "Quicksand" },
  { id: "2", value: comic_neue.className, label: "Comic Neue" },
  { id: "3", value: pacifico.className, label: "Pacifico" },
  { id: "4", value: inter.className, label: "Inter" },
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
    textBottom: Yup.string().required("Please enter text for bottom"),
    textTop: Yup.string().required("Please enter text for top"),
    font: Yup.string().required("Please select a font"),
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
      font: "",
      alignText: "center",
      fontSize: 40,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
      setTemplates([values, ...templates]);

      onClose();
      formik.setErrors({});
      formik.resetForm();
    },
  });
  // const { image, textBottom, textTop, font, alignText, fontSize } =
  //   formik.values;
  const { image, textBottom, textTop, fontSize } = formik.values;
  const [alignTextTop, setAlignTextTop] = useState("");
  const [alignTextBottom, setAlignTextBottom] = useState("");
  const [fontFamilyTop, setFontFamilyTop] = useState("");
  const [fontFamilyBottom, setFontFamilyBottom] = useState("");
  const [fontSizeTop, setFontSizeTop] = useState("");
  const [fontSizeBottom, setFontSizeBottom] = useState("");
  const [colorTextTop, setColorTextTop] = useState("#000000");
  const [colorTextBottom, setColorTextBottom] = useState("#000000");

  console.log("fontFamilyTop", fontFamilyTop);

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
        <DrawerHeader px="0">
          <Logo />
        </DrawerHeader>
        <form encType="file" onSubmit={formik.handleSubmit}>
          <Flex justifyContent="space-between" gap={4}>
            {formik.values?.image.name !== "" && (
              <Box width="65%" position="relative">
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
                  textTransform="uppercase"
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
                  textTransform="uppercase"
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
              width={formik.values?.image.name ? "30%" : "100%"}
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
                {formik.touched.textTop && formik.errors.textTop && (
                  <FormHelperText color="red">
                    {formik.errors.textTop}
                  </FormHelperText>
                )}
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

                {formik.touched.textBottom && formik.errors.textBottom && (
                  <FormHelperText color="red">
                    {formik.errors.textBottom}
                  </FormHelperText>
                )}
              </FormControl>

              <Button
                bg="brand.200"
                type="submit"
                color="white"
                display="block"
                width="100%"
                borderRadius="0"
              >
                Generate Meme
              </Button>
            </Flex>
          </Flex>
        </form>
      </DrawerContent>
    </Drawer>
  );
};
