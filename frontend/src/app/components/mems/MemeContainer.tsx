import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { MemeContainerProps } from "@/app/types";

export const MemeContainer = ({
  memeContainerRef,
  formik,
  colorTextTop,
  colorTextBottom,
  alignTextTop,
  alignTextBottom,
  fontFamilyTop,
  fontFamilyBottom,
  fontSizeTop,
  fontSizeBottom,
  textTop,
  textBottom,
}: MemeContainerProps) => {
  return (
    <Box
      width={
        formik.values?.image.name !== "" ? { base: "100%", md: "60%" } : "100%"
      }
      position="relative"
      height={{ base: "300px", md: "500px" }}
      id="meme-container"
      ref={memeContainerRef}
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
        transform={alignTextTop === "center" ? "translateX(-50%)" : "none"}
      >
        <Text>{textTop}</Text>
      </Box>
      <Image
        src={formik.values.image?.url}
        alt={formik.values.image?.name}
        fill
        style={{ objectFit: "cover" }}
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
        transform={alignTextBottom === "center" ? "translateX(-50%)" : "none"}
      >
        <Text>{textBottom}</Text>
      </Box>
    </Box>
  );
};
