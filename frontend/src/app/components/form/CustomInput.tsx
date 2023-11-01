import { Input } from "@chakra-ui/react";
import React from "react";

export interface CustomInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

const CustomInput = ({ value, onChange, placeholder }: CustomInputProps) => {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      width={{ base: "100%", md: "100%" }}
      value={value}
      onChange={onChange}
      _focus={{
        borderColor: "gray.300",
        boxShadow: "sm",
        borderWidth: "2px",
      }}
    />
  );
};

export default CustomInput;
