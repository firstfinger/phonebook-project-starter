import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [contactList, setContactList] = useState([]);
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  useEffect(() => {
    axios
      .get("/api/contacts/")
      .then((res) => setContactList(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = () => {
    // if(item.id){
    //   axios.put(`/api/contacts/${item.id}/`, item)
    // }

    const contact = {
      "name": name,
      "phone_number": phoneNo,
    };
    axios.post("/api/contacts/", contact).catch((err) => console.log(err));
    return
  };

  return (
    <div className="App">
      <h1>My Contact List</h1>
      <ul>
        {contactList.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.phone_number}
          </li>
        ))}
      </ul>

      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter Name ..."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="text"
            name="phone_number"
            placeholder="Enter Phone Number"
            onChange={(e) => setPhoneNo(e.target.value)}
            value={phoneNo}
          />
        </label>
          <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
