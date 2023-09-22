import { Box, Text, useDisclosure } from "@chakra-ui/react";
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import DarkGradientContainer from "@/components/molecules/DarkGradientContainer";
import DrawerMenu from "@/components/DrawerMenu";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box padding={{ base: '16px' }} bg='shark' minH={{ base: '100vh' }} height={{ base: '100vh' }}>
      <Header onOpen={onOpen} />

      <Box display="flex" marginY={{ base: '16px' }}>
        <DarkGradientContainer
          display={{ base: 'none', lg: 'block' }}
          width={{ base: "0", lg: "250px" }}
          padding={{ base: '32px 24px' }}
          height="732px"
          overflow={{ base: 'scroll' }}
        >
          <SideMenu />
        </DarkGradientContainer>

        <Box flex="1" p="4">
          <Text>Contenido de la página</Text>
        </Box>
      </Box>
      <DrawerMenu onClose={onClose} isOpen={isOpen} />
    </Box>
  );
}

export default App;
