"use client";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { HamburgerIcon } from "../../theme/icons";
import { menuItems } from "../../data/options";
import { usePathname } from "next/navigation";

export const NavBarMobile = () => {
  const pathname = usePathname();
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        my="1rem"
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="outline"
        display={{ base: "block", md: "none" }}
      />
      <MenuList w="100vw" border="none" h="100vh" zIndex="2">
        {menuItems.map((item) => (
          <MenuItem key={item.name}>
            <Link href={item.path}>
              <Text color={pathname === item.path ? "brand.200" : "black"}>
                {item.name}
              </Text>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default NavBarMobile;
