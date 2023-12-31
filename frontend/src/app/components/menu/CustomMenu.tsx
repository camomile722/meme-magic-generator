import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Button,
} from "@chakra-ui/react";

import { CustomTooltip } from "../tooltip/CustomTooltip";
import { CustomMenuProps } from "@/app/types";

export const CustomMenu = ({
  customOptions,
  setCustomOption,
  menuButtonIcon,
  menuButtonIconRight,
  buttonLabel,
  tooltipLabel,
  onClick,
  disabled,
}: CustomMenuProps) => {
  return (
    <Menu>
      <CustomTooltip label={tooltipLabel}>
        {menuButtonIconRight ? (
          <MenuButton
            as={Button}
            rightIcon={menuButtonIconRight}
            aria-label={tooltipLabel}
            bg={disabled ? "gray.300" : "brand.200"}
            _hover={{ bg: "brand.100" }}
            _active={{ bg: "brand.100" }}
            cursor={disabled ? "not-allowed" : "pointer"}
            type="submit"
            color="white"
            width="100%"
            borderRadius="0"
            disabled={disabled}
          >
            {buttonLabel}
          </MenuButton>
        ) : (
          <MenuButton
            as={IconButton}
            icon={menuButtonIcon}
            aria-label={tooltipLabel}
            bg="brand.50"
          />
        )}
      </CustomTooltip>
      {!disabled && (
        <MenuList>
          <MenuOptionGroup type="radio">
            {customOptions?.map((option) => (
              <MenuItemOption
                key={option.id}
                value={String(option.value)}
                onClick={() => {
                  setCustomOption(String(option.value));
                  onClick && onClick(String(option.value));
                }}
              >
                {option.label}
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      )}
    </Menu>
  );
};
