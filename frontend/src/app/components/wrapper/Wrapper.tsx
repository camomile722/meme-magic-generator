import { WrapperProps } from "@/app/types";
import { Box } from "@chakra-ui/react";

function Wrapper({ children, padding }: WrapperProps) {
  return (
    <Box maxWidth="1400px" m="0 auto" p={padding ?? { base: 4, md: 10 }}>
      {children}
    </Box>
  );
}

export default Wrapper;
