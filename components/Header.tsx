import React from 'react'
import { IconButton, Image } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import DarkGradientContainer from './molecules/DarkGradientContainer';
import images from '@/assets';

function Header({ onOpen }: { onOpen: () => void }) {
  return (
    <DarkGradientContainer
      paddingX={{ base: '32px' }}
      height={{ base: '128px' }}
      display={{ base: 'flex' }}
      alignItems={{ base: 'center' }}
    >
      <Image alt='tomate_logo' src={images.tomate_logo} />
      <IconButton
        icon={<HamburgerIcon />}
        display={{ base: "block", lg: "none" }}
        onClick={onOpen}
        aria-label="Abrir menú"
      />
    </DarkGradientContainer>
  )
}

export default Header;
