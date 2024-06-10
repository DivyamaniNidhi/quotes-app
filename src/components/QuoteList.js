import React from "react";
import { Box, Button, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

const QuoteList = ({ savedQuotes, onDelete }) => (
  <Box p="6">
    <Heading mb="4">Saved Quotes</Heading>
    <SimpleGrid columns={[1, 2, 4]} spacing="4">
      {savedQuotes.map((quote, index) => (
        <Box
          key={index}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          p="4"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          position="relative"
          height="100%" // Ensure the card takes full height within the grid
        >
          <Stack spacing="4" direction="column" flexGrow={1}>
            <Box>{quote}</Box>
            <Button
              mt="auto" // Pushes the button to the bottom
              colorScheme="red"
              onClick={() => onDelete(index)}
              alignSelf="center"
            >
              Delete
            </Button>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default QuoteList;
