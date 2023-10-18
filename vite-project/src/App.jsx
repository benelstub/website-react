import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { GlobalNav } from "./components/global/GlobalNav.jsx";
import { Contact } from "./pages/Contact.jsx";
import { Home } from "./pages/home.jsx";
import { ErrorPage } from "./pages/ErrorPage";

import "./App.css";

function App() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <ThemeProvider>
        <GlobalNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
