import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import SideMenu from './SideMenu'
import DarkGradientContainer from './molecules/DarkGradientContainer';

type DrawerMenuProps = {
  onClose: () => void;
  isOpen: boolean;
};

function DrawerMenu({ onClose, isOpen }: DrawerMenuProps) {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DarkGradientContainer borderRadius={{ base: '0px' }} height={{ base: '100vh' }} overflow={{ base: 'scroll' }}>
            <DrawerBody>
              <SideMenu />
            </DrawerBody>
          </DarkGradientContainer>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default DrawerMenu;
