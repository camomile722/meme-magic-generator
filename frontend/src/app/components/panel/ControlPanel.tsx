import {
  AlignTxtCenter,
  AlignTxtLeft,
  AlignTxtRight,
  FontColor,
  FontFamily,
  FontSize,
} from "@/app/theme/icons";
import { IconButton, Flex, Box } from "@chakra-ui/react";
import { CustomTooltip } from "../tooltip/CustomTooltip";
import { CustomMenu } from "../menu/CustomMenu";
import { SketchPicker } from "react-color";
import { useEffect, useRef, useState } from "react";

export interface ControlPanelProps {
  setAlignText: (alignText: string) => void;
  selectFontOptions: { id: string; value: string; label: string }[];
  setCustomOption: (custom: string) => void;
  fontSizeOptions: { id: string; value: string; label: string }[];
  setFontSize: (fontSize: string) => void;
  setColorText: (colorText: string) => void;
  textColor: string;
}

export const ControlPanel = ({
  setAlignText,
  selectFontOptions,
  setCustomOption,
  fontSizeOptions,
  setFontSize,
  setColorText,
  textColor,
}: ControlPanelProps) => {
  const menuItems = [
    { value: "center", label: "Center", icon: <AlignTxtCenter /> },
    { value: "left", label: "Left", icon: <AlignTxtLeft /> },
    { value: "right", label: "Right", icon: <AlignTxtRight /> },
  ];
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const colorPickerRef = useRef(null);
  const handleColorChange = (color) => {
    setColorText(color.hex);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target)
      ) {
        // Click occurred outside the SketchPicker, so close it
        setIsColorPickerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Flex gap="2" justifyContent="flex-start" width="100%">
      <CustomMenu
        customOptions={selectFontOptions}
        setCustomOption={setCustomOption}
        menuButtonIcon={<FontFamily />}
        tooltipLabel="Choose font"
      />

      <CustomMenu
        customOptions={fontSizeOptions}
        setCustomOption={setFontSize}
        menuButtonIcon={<FontSize />}
        tooltipLabel="Choose font size"
      />
      {menuItems.map((item) => (
        <CustomTooltip key={item.label} label={`Align text ${item.value}`}>
          <IconButton
            aria-label="Options"
            icon={item.icon}
            onClick={() => setAlignText(item.value)}
            bg="brand.50"
          />
        </CustomTooltip>
      ))}
      <CustomTooltip label="Choose text color">
        <IconButton
          aria-label="Choose text color"
          icon={<FontColor />}
          color={textColor ?? "black"}
          onClick={() => {
            setIsColorPickerOpen(!isColorPickerOpen);
          }}
          bg="brand.50"
        />
      </CustomTooltip>
      {isColorPickerOpen && (
        <Box
          position="absolute"
          zIndex="10"
          right="0"
          top="40px"
          ref={colorPickerRef}
        >
          <SketchPicker color={textColor} onChange={handleColorChange} />
        </Box>
      )}
    </Flex>
  );
};
