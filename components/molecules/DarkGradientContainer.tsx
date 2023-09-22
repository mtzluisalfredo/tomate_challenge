import React, { ReactNode, ReactElement } from 'react'
import { Box, BoxProps } from '@chakra-ui/react'
import { hexToRgba } from '@/utils'
import { colors } from '@/styles/colors'

interface DarkGradientContainerProps extends BoxProps {
  children: ReactNode;
}

function DarkGradientContainer({ children, ...props }: DarkGradientContainerProps): ReactElement {
  return (
    <Box
      bg='shark'
      bgGradient={`linear(180deg, ${hexToRgba(colors.alabaster, 0.15)} 0%, ${hexToRgba(colors.alabaster, 0.03)} 100%)`}
      boxShadow={`5px 5px 10px 0px ${hexToRgba('#000', 0.10)}`}
      borderRadius="16px"
      {...props}
    >
      {children}
    </Box>
  )
}

export default DarkGradientContainer
