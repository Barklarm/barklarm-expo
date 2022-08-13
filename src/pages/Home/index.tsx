import React from "react";
import { NativeBaseProvider, Box } from "native-base";

export default function Home() {
  return (
    <NativeBaseProvider>
      <Box>Hello Home</Box>
    </NativeBaseProvider>
  );
}