import React from 'react'
import { IconButton, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import DarkGradientContainer from './molecules/DarkGradientContainer';
import images from '@/assets';

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <DarkGradientContainer
      paddingX={{ base: '32px' }}
      height={{ base: '80px', lg: '128px' }}
      display={{ base: 'flex' }}
      alignItems={{ base: 'center' }}
    >
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
    </DarkGradientContainer>
  )
}

export default Header;
