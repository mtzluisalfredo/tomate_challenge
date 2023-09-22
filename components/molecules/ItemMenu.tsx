import { Text, Flex, Icon, Image } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { MenuItem } from '@/types/menu';

type ItemMenuProps = {
  onClick: () => void;
  subItems: MenuItem[] | undefined;
  openMenus: number[];
  index: number;
  menuItem: {
    label: string;
    icon?: string;
  };
};

function ItemMenu({ onClick, subItems, openMenus, index, menuItem }: ItemMenuProps) {
  return (
    <Flex
      height={{ base: "48px" }}
      alignItems="center"
      onClick={onClick}
      cursor="pointer"
      justifyContent={{ base: 'space-between' }}
    >
      <Flex>
        <Image marginRight={{base: '16px'}} alt='icon' src={menuItem?.icon} />
        <Text _hover={{ color: "gray.200" }}>{menuItem.label}</Text>
      </Flex>
      {subItems && (
        <Icon as={openMenus.includes(index) ? ChevronUpIcon : ChevronDownIcon} ml={2} />
      )}
    </Flex>
  )
}

export default ItemMenu;
