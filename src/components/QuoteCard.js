import React from "react";
import { Box, Button, Text, Stack } from "@chakra-ui/react";

const QuoteCard = ({ quote, onSave, fetchNewQuote }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6" mb="4">
    <Text mb="4">{quote}</Text>
    <Stack direction={["column", "row"]} spacing="4">
      <Button colorScheme="teal" onClick={() => onSave(quote)}>
        Save to List
      </Button>
      <Button colorScheme="teal" onClick={fetchNewQuote}>
        Fetch New Quote
      </Button>
    </Stack>
  </Box>
);

export default QuoteCard;
