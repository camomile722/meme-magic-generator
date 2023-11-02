"use client";
import { Box, Flex, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { ShoppingBag, User } from "../../theme/icons";
import NavIconLink from "./NavIconLink";
import NavBarMobile from "./NavBarMobile";
import { Logo } from "../layout/Logo";
import { menuItems } from "../../data/options";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  const navIcons = [
    {
      id: 1,
      icon: <ShoppingBag boxSize="20px" />,
      url: "/cart",
    },
    { id: 2, icon: <User boxSize="20px" />, url: "/login" },
  ];
  return (
    <Flex justifyContent="space-between" alignItems="center" as="nav">
      <Box>
        <Link href="/">
          <Logo />
        </Link>
      </Box>
      <UnorderedList
        styleType="none"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        py="0.6rem"
        margin="0"
        gap={14}
        textTransform="uppercase"
        fontSize="sm"
        fontWeight={600}
      >
        <Box gap="3rem" display={{ base: "none", md: "flex" }}>
          {menuItems.map((item) => (
            <ListItem key={item.name}>
              <Link href={item.path}>
                <Text color={pathname === item.path ? "brand.200" : "black"}>
                  {item.name}
                </Text>
              </Link>
            </ListItem>
          ))}
        </Box>
      </UnorderedList>
      <UnorderedList display="flex" styleType="none" gap={{ base: 3, md: 8 }}>
        {navIcons.map((item) => (
          <NavIconLink key={item.id} icon={item.icon} url={item.url} />
        ))}
      </UnorderedList>
      <NavBarMobile />
    </Flex>
  );
};
