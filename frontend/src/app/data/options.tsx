import { comic_neue, inter, pacifico, quicksand } from "../layout";

export const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Tools",
    path: "/tools",
  },
  {
    name: "Pricing",
    path: "/pricing",
  },
];

export const fontSizeOptions = [
  { id: "1", value: "2xl", label: "40px" },
  { id: "2", value: "4xl", label: "50px" },
  { id: "3", value: "6xl", label: "60px" },
];

export const selectFontOptions = [
  { id: "1", value: quicksand.className, label: "Quicksand" },
  { id: "2", value: comic_neue.className, label: "Comic Neue" },
  { id: "3", value: pacifico.className, label: "Pacifico" },
  { id: "4", value: inter.className, label: "Inter" },
];

export const fileExtensionOptions = [
  { id: "1", value: "jpg", label: "JPG" },
  { id: "2", value: "png", label: "PNG" },
  { id: "4", value: "gif", label: "GIF" },
];
