"use client";
import { NavIconLinkProps } from "@/app/types";
import { ListItem } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavIconLink({ icon, children, url }: NavIconLinkProps) {
  const pathname = usePathname();
  return (
    <Link href={url}>
      <ListItem
        position="relative"
        color={pathname === url ? "brand.200" : "black"}
      >
        {icon}

        {children}
      </ListItem>
    </Link>
  );
}

export default NavIconLink;
