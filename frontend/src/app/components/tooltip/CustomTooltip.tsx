import { CustomTooltipProps } from "@/app/types";
import { Tooltip } from "@chakra-ui/react";

export const CustomTooltip = ({ children, label }: CustomTooltipProps) => {
  return (
    <Tooltip
      label={label}
      aria-label={label}
      placement="top-start"
      bg="gray.200"
      p="2"
      color="black"
      hasArrow
    >
      {children}
    </Tooltip>
  );
};
