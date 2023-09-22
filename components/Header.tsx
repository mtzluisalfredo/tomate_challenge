import React from 'react'
import { IconButton, Flex, Text, InputGroup, InputLeftElement, Input, Image } from "@chakra-ui/react";
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from "@chakra-ui/icons";
import DarkGradientContainer from './molecules/DarkGradientContainer';
import images from '@/assets';

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <DarkGradientContainer
      paddingX={{ base: '32px' }}
      paddingY={{ base: '32px', lg: '0px' }}
      height={{ base: 'auto', lg: '128px' }}
      display={{ base: 'flex' }}
      alignItems={{ base: 'flex-start', lg: 'center' }}
      justifyContent={{ base: 'space-between' }}
      flexDirection={{ base: 'column', lg: 'row' }}
      flex={1}
      width={{ base: '100%' }}
    >
      <Flex>
        <IconButton
          bg='transparent'
          color={{ base: 'white' }}
          _hover={{ bgColor: 'transpatent' }}
          _active={{ bgColor: 'transpatent' }}
          icon={<HamburgerIcon />}
          display={{ base: "block", lg: "none" }}
          onClick={onOpen}
          aria-label="Abrir menú"
        />
        <Image height={{ base: '40px', lg: '80px' }} alt='tomate_logo' src={images.tomate_logo} />
      </Flex>

      <Flex width={{ base: '100%' }} alignItems={{ base: 'center' }} justifyContent={{ base: 'flex-end' }}>
        <InputGroup maxWidth={{ base: '480px' }}>
          <InputLeftElement height={{ base: '32px' }} pointerEvents='none' padding={{ base: 0 }}>
            <SearchIcon color='alabasterbg' />
          </InputLeftElement>
          <Input
            height={{ base: '32px' }}
            placeholder='Buscar módulo'
            maxWidth={{ base: '480px' }}
            variant='search' bg='alabasterbg'
            borderRadius={{ base: '8px' }}
            color='placeholder'
            _placeholder={{
              color: "placeholder",
            }}
          />
        </InputGroup>

        <Flex marginX={{ base: '16px' }} alignItems={{ base: 'center' }}>
          <Image boxSize={{ base: '25px' }} alt='notificaciones' src={images.notificaciones} />
          <Text marginX={{ base: '8px' }} color={{ base: 'white' }}>María Hernándex</Text>
          <ChevronDownIcon color={{ base: 'white' }} />
        </Flex>
        <Image borderRadius={{ base: '50%' }} boxSize={{ base: '56px' }} src={images.icon_tomate} />
      </Flex>
    </DarkGradientContainer>
  )
}

export default Header;
