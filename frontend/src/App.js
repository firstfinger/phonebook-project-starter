import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";

function App() {
  const [contactList, setContactList] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/contacts/")
      .then((res) => setContactList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      <Routes>
        <Route path="/"   element={<Home />} />
        <Route path="add-contact" element={<AddContact />} />
      </Routes>
    </div>
  );
}

export default App;
