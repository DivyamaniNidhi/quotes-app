import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import QuoteCard from "./QuoteCard";
import QuoteList from "./QuoteList";

const QuoteFetcher = () => {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState(
    JSON.parse(localStorage.getItem("savedQuotes")) || []
  );

  const fetchQuote = async () => {
    const response = await fetch(
      "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
    );
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = (quote) => {
    const newSavedQuotes = [...savedQuotes, quote];
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem("savedQuotes", JSON.stringify(newSavedQuotes));
  };

  const deleteQuote = (index) => {
    const newSavedQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(newSavedQuotes);
    localStorage.setItem("savedQuotes", JSON.stringify(newSavedQuotes));
  };

  return (
    <Box p="6">
      <Heading mb="4">Ron Swanson Quotes</Heading>
      <QuoteCard quote={quote} onSave={saveQuote} fetchNewQuote={fetchQuote} />
      <QuoteList savedQuotes={savedQuotes} onDelete={deleteQuote} />
    </Box>
  );
};

export default QuoteFetcher;
