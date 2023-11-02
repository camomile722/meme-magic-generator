import { FormControl, Textarea } from "@chakra-ui/react";
import { CustomTextAreaProps } from "@/app/types";

export const CustomTextArea = ({
  children,
  formik,
  placeholder,
  fieldName,
}: CustomTextAreaProps) => {
  return (
    <FormControl>
      {children}
      <Textarea
        size="md"
        placeholder={placeholder}
        {...formik.getFieldProps(fieldName)}
        _focus={{
          borderColor: "gray.300",
          boxShadow: "sm",
          borderWidth: "2px",
        }}
        mt={2}
      />
    </FormControl>
  );
};
