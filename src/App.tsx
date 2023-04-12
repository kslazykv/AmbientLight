import * as React from "react"
import { ChakraProvider, Container, theme } from "@chakra-ui/react"
import { AmbientComponent } from "./ambient/AmbientComponent"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Container maxW={'container.xl'} alignItems='center' justifyContent={'center'} display={'flex'}>
      <AmbientComponent/>
    </Container>
  </ChakraProvider>
)
