import { MenuItem } from "@/types/menu";
import { Flex, Text } from "@chakra-ui/react";


// Definir los tipos para las props
type ItemSubMenuProps = {
  onClick: () => void;
  selectedItem: string | number; 
  subIndex: number;
  subItem: MenuItem;
};

function ItemSubMenu({ onClick, selectedItem, subIndex, subItem }: ItemSubMenuProps) {
  return (
    <Flex
      onClick={onClick}
      width={{ base: '100%' }}
      key={subIndex}
      height={{ base: "52px" }}
      alignItems="center"
      cursor="pointer"
      borderLeftWidth="2px"
      borderLeftColor={selectedItem === subItem?.id ? "red.500" : "white"}
      transition="border-left-color 0.3s ease-in-out"
      paddingLeft={{ base: "14px" }}
    >
      <Text _hover={{ color: "gray.200" }}>{subItem.label}</Text>
    </Flex>
  );
}

export default ItemSubMenu;
