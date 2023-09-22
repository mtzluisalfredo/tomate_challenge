import { MenuItem } from "@/types/menu";

export function hexToRgba(hex: string, opacity: number): string | null {
  hex = hex.replace(/^#/, '');

  if (!/^(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)) {
    return null;
  }

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  if (opacity < 0) opacity = 0;
  if (opacity > 1) opacity = 1;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function addUniqueId(menu: MenuItem[], parentLabel = ''): MenuItem[] {
  let uniqueId = 1;

  return menu.map((item) => {
    const id = `${parentLabel}-${uniqueId}`;
    uniqueId++;

    const newItem: MenuItem = { ...item, id };

    if (item.subItems) {
      newItem.subItems = addUniqueId(item.subItems, id);
    }

    return newItem;
  });
}