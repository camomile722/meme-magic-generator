import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/react";
import {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  SetStateAction,
} from "react";
import { CustomTooltip } from "../tooltip/CustomTooltip";
import { NextFont } from "next/dist/compiled/@next/font";
export interface CustomMenuProps {
  customOptions: { id: string; value: NextFont | string; label: string }[];
  // setCustomOption: (custom: string) => void;
  setCustomOption:
    | Dispatch<SetStateAction<{ className?: string | undefined }>>
    | ((fontSize: string) => void);
  menuButtonIcon:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | undefined;
  tooltipLabel: string;
}
export const CustomMenu = ({
  customOptions,
  setCustomOption,
  menuButtonIcon,
  tooltipLabel,
}: CustomMenuProps) => {
  return (
    <Menu>
      <CustomTooltip label={tooltipLabel}>
        <MenuButton
          as={IconButton}
          icon={menuButtonIcon}
          aria-label={tooltipLabel}
          bg="brand.50"
        />
      </CustomTooltip>

      <MenuList>
        <MenuOptionGroup type="radio">
          {customOptions?.map((option) => (
            <MenuItemOption
              key={option.id}
              value={String(option.value)}
              onClick={() => setCustomOption(String(option.value))}
            >
              {option.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};
