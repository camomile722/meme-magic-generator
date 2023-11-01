import { Box } from "@chakra-ui/react";
export interface WrapperProps {
    children: React.ReactNode;
    padding?: string;
}

function Wrapper({ children, padding }: WrapperProps) {
    return (
        <Box maxWidth="1400px" m="0 auto" p={padding ?? { base: 4, md: 10 }}>
            {children}
        </Box>
    );
}

export default Wrapper;
