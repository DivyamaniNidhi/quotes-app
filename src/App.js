import React from "react";
import { Route, Routes } from "react-router-dom";
import QuoteFetcher from "./components/QuoteFetcher";
import QuoteList from "./components/QuoteList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<QuoteFetcher />} />
      <Route path="/saved-quotes" element={<QuoteList />} />
    </Routes>
  );
}

export default App;
