import { Box, Collapse, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { addUniqueIdAndLinkify, keyc } from "@/utils";
import { menuConfig, menuData } from "@/constants/menu";
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
  const menuHelp = addUniqueIdAndLinkify(menuConfig);

  return (
    <Flex color="white" flexDirection={{ base: 'column' }} flex={1} height={{ base: '100%' }} justifyContent={{ base: 'space-between' }}>
      <Box>
        {menuWithLinks.map((menuItem, index) => (
          <Box key={keyc()}>
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
                      key={keyc()}
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
      </Box>
      <Box paddingTop={{ base: '16px' }} borderTopWidth={{ base: '2px' }} borderTopStyle={{ base: 'solid' }} borderTopColor='#F9F9F933'>
        {menuHelp.map((menuItem, index) => {
          return (
            <ItemMenu
              key={keyc()}
              onClick={() => {
                const linkPage = !menuItem?.subItems ? (menuItem?.link || '') : '';
                router.push(linkPage);
              }}
              openMenus={openMenus}
              index={index}
              menuItem={menuItem}
            />
          )
        })}
      </Box>
    </Flex>
  );
}

export default SidebarMenu;
