import { Box, Collapse, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { addUniqueId } from "@/utils";
import { menuData } from "@/constants/menu";
import ItemMenu from "./molecules/ItemMenu";
import ItemSubMenu from "./molecules/ItemSubMenu";

function SidebarMenu() {
  const [openMenus, setOpenMenus] = useState<number[]>([]);
  const [selectedItem, setSelectedItem] = useState<number | string>('');

  const handleItemClick = (index: number) => {
    toggleSubMenu(index);
  };

  const handleSubItemClick = (index: string) => {
    setSelectedItem(index);
  };

  const toggleSubMenu = (index: number) => {
    if (openMenus.includes(index)) {
      setOpenMenus(openMenus.filter((item) => item !== index));
    } else {
      setOpenMenus([...openMenus, index]);
    }
  };

  return (
    <Box color="white">
      {addUniqueId(menuData).map((menuItem, index) => (
        <Box key={index}>
          <ItemMenu
            subItems={menuItem.subItems}
            onClick={() => handleItemClick(index)}
            openMenus={openMenus}
            index={index}
            menuItem={menuItem}
          />
          {menuItem.subItems && (
            <Collapse in={openMenus.includes(index)}>
              <Box paddingLeft={{ base: "14px" }}>
                {menuItem.subItems.map((subItem, subIndex) => (
                  <ItemSubMenu
                    onClick={() => handleSubItemClick(subItem?.id || '')}
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
