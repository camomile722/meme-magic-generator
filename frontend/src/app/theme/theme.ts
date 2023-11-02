import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { shadows } from "./shadows";

export const theme = extendTheme({
  colors: {
    ...colors,
  },
  shadows: {
    ...shadows,
  },
});
