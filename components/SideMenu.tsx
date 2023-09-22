import { Box, Collapse, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { addUniqueIdAndLinkify } from "@/utils";
import { menuData } from "@/constants/menu";
import ItemMenu from "./molecules/ItemMenu";
import ItemSubMenu from "./molecules/ItemSubMenu";
import { useRouter } from "next/router";

function SidebarMenu() {
  const router = useRouter();
  const [openMenus, setOpenMenus] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | string>('');

  const handleItemClick = (index: number, link: string) => {
    router.push(link);
    toggleSubMenu(index);
  };

  const handleSubItemClick = (index: string, subLink: string) => {
    setSelectedItem(index);
    router.push(subLink);
  };

  const toggleSubMenu = (index: number) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((item) => item !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  const menuWithLinks = addUniqueIdAndLinkify(menuData);

  return (
    <Box color="white">
      {menuWithLinks.map((menuItem, index) => (
        <Box key={index}>
          <ItemMenu
            subItems={menuItem.subItems}
            onClick={() => {
              const linkPage = !menuItem?.subItems ? (menuItem?.link || '') : '';
              handleItemClick(index, linkPage)
            }}
            openMenus={openMenus}
            index={index}
            menuItem={menuItem}
          />
          {menuItem.subItems && (
            <Collapse in={openMenus.includes(index)}>
              <Box paddingLeft={{ base: "14px" }}>
                {menuItem.subItems.map((subItem, subIndex) => (
                  <ItemSubMenu
                    onClick={() => {
                      const subLinkPage = subItem?.link || '';
                      handleSubItemClick(subItem?.id || '', subLinkPage);
                    }}
                    selectedItem={selectedItem}
                    subIndex={subIndex}
                    subItem={subItem}
                  />
                ))}
              </Box>
            </Collapse>
          )}
        </Box>
      ))}
      <Flex>
      </Flex>
    </Box>
  );
}

export default SidebarMenu;
