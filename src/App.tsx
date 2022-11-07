import React from "react"
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import ConnectPage from "./pages/ConnectPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CheckoutPage from "./pages/CheckoutPage"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ConnectPage />} />
        </Routes>
        <Routes>
          <Route path="checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  </ChakraProvider>
)
