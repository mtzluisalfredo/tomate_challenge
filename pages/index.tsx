import { Box, Heading, ChakraProvider, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ChakraProvider>
      <Heading as="h1" size="xl" mb="4" height={{ base: '80px' }}>
        <IconButton
          icon={<HamburgerIcon />}
          display={{ base: "block", lg: "none" }}
          onClick={onOpen}
          aria-label="Abrir menú"
        />
      </Heading>

      <Box display="flex">
        {/* Menú Lateral */}
        <Box
          bg="gray.200"
          w={{ base: "0", lg: "250px" }}
          h="100vh"
          p="4"
          display={{ base: "none", lg: "block" }}
        >
          <VStack align="start" spacing="4">
            {/* Agrega aquí tus elementos de menú */}
            <Text>Elemento 1</Text>
            <Text>Elemento 2</Text>
            <Text>Elemento 3</Text>
          </VStack>
        </Box>

        {/* Contenido */}
        <Box flex="1" p="4">

          {/* Agrega aquí el contenido de tu página */}
          <Text>Contenido de la página</Text>
        </Box>
      </Box>

      {/* Cajón de menú para pantallas pequeñas */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader>Menú</DrawerHeader>
            <DrawerBody>
              <VStack align="start" spacing="4">
                {/* Agrega aquí tus elementos de menú */}
                <Text>Elemento 1</Text>
                <Text>Elemento 2</Text>
                <Text>Elemento 3</Text>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </ChakraProvider>
  );
}

export default App;
