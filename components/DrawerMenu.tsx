import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import SideMenu from './SideMenu'

type DrawerMenuProps = {
  onClose: () => void;
  isOpen: boolean;
};

function DrawerMenu({ onClose, isOpen }: DrawerMenuProps) {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerHeader>Menú</DrawerHeader>
          <DrawerBody>
            <SideMenu />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default DrawerMenu;
