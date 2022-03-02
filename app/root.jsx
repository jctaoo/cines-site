import { Outlet } from "remix";
import {
  ChakraProvider,
  Stack,
  Heading,
  Container,
  Skeleton,
  Text
} from "@chakra-ui/react";
import { Document } from "./components";
import { Ghost } from "react-kawaii";
import { ClientOnly } from "remix-utils";

export function meta() {
  return { title: "New Remix App" };
}

export default function App() {
  return (
    <Document>
      <ChakraProvider>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <Document>
      <ChakraProvider>
        <Container
          display="flex"
          justifyContent="center"
          alignItems="center"
          h="100vh"
          maxW="lg"
        >
          <Stack alignItems="center" spacing={5} mb="120px">
            <ClientOnly fallback={<Skeleton height="240px" width="240px" />}>
              <Ghost size={240} mood="blissful" color="#E0E4E8" />
            </ClientOnly>
            <Heading as="h1">There was an error</Heading>
            <Text align="center">{ error.message }</Text>
          </Stack>
        </Container>
      </ChakraProvider>
    </Document>
  );
}
