import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import DarkGradientContainer from "@/components/molecules/DarkGradientContainer";
import DrawerMenu from "@/components/DrawerMenu";
import { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding={{ base: '16px' }} bg='shark' minH={{ base: '100vh' }} height={{ base: '100vh' }}>
      <Header onOpen={onOpen} />

      <Box display="flex" marginY={{ base: '16px' }} color={{ base: 'white' }}>
        <DarkGradientContainer
          display={{ base: 'none', lg: 'block' }}
          width={{ base: "0", lg: "250px" }}
          padding={{ base: '32px 24px' }}
          height="732px"
          overflow={{ base: 'scroll' }}
        >
          <SideMenu />
        </DarkGradientContainer>

        <Flex flex={1} marginX={{ base: '16px' }} padding={{ base: '16px' }}>
          {children}
        </Flex>
      </Box>
      <DrawerMenu onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}

export default Layout;
