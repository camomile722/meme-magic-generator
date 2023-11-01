import React from "react";
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
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";

import { UploadFileInput } from "./UploadFileInput";
import { TemplatesDataProps } from "../mems/TemplateList";

export interface UploadFormProps {
  templates: TemplatesDataProps[];
  setTemplates: React.Dispatch<React.SetStateAction<TemplatesDataProps[]>>;
  onClose: () => void;
  isOpen: boolean;
}
const selectOptions = [
  { value: "funny", label: "Funny" },
  { value: "sad", label: "Sad" },
  { value: "happy", label: "Happy" },
  { value: "cartoons", label: "Cartoons" },
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
    tags: Yup.string().required("Please enter tags"),
    category: Yup.string().required("Please select a category"),
  });
  const formik = useFormik({
    initialValues: {
      id: Date.now().toString(36) + Math.random().toString(36),
      image: {
        name: "",
        url: "",
      },
      tags: "",
      category: "",
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

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={() => {
        onClose();
        formik.setErrors({});
        formik.resetForm();
      }}
      size="xl"
    >
      <DrawerOverlay />
      <DrawerContent p={6}>
        <DrawerCloseButton />
        <DrawerHeader px="0">Add Meme</DrawerHeader>
        <form encType="file" onSubmit={formik.handleSubmit}>
          <Flex gap={6} alignItems="center" flexDir="column">
            <UploadFileInput formik={formik} />

            {formik.values?.image.name !== "" && (
              <>
                <Box width="100%">
                  <Text textAlign="center" fontWeight={600}>
                    Selected Files: <br />{" "}
                  </Text>

                  <Box
                    height="60px"
                    maxW="50px"
                    overflowY="hidden"
                    my={4}
                    boxShadow="lg"
                  >
                    <img
                      src={formik.values.image?.url}
                      alt={formik.values.image?.name}
                    />
                  </Box>
                </Box>
              </>
            )}
            <FormControl>
              <Textarea
                size="md"
                placeholder="Tags"
                {...formik.getFieldProps("tags")}
                _focus={{
                  borderColor: "gray.300",
                  boxShadow: "sm",
                  borderWidth: "2px",
                }}
              />

              {formik.touched.tags && formik.errors.tags && (
                <FormHelperText color="red">
                  {formik.errors.tags}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl>
              <Select
                {...formik.getFieldProps("category")}
                _focus={{
                  borderColor: "gray.300",
                  boxShadow: "sm",
                  borderWidth: "2px",
                }}
              >
                <option value="">Category</option>
                {selectOptions?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>

              {formik.touched.category && formik.errors.category && (
                <FormHelperText color="red">
                  {formik.errors.category}
                </FormHelperText>
              )}
            </FormControl>
            <Button
              bg="#6C757D"
              type="submit"
              color="white"
              display="block"
              width="100%"
            >
              Add
            </Button>
          </Flex>
        </form>
      </DrawerContent>
    </Drawer>
  );
};
