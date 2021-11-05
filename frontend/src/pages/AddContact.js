import React, { useState } from "react";
import axios from "axios";
import { message, Button } from "antd";
import { useNavigate } from "react-router-dom";

function AddContact() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleSubmit = () => {
    const contact = {
      name: name,
      phone_number: phoneNo,
    };

    if (name === "") {
      message.error("Name field is empty");
    } else if (phoneNo === "") {
      message.error("Phone number field is empty");
    } else {
      axios.post("/api/contacts/", contact).catch((err) => console.log(err));
      navigate("/");
      message.success("Added successfully");
    }
  };

  return (
    <div>
      <p>Add contact</p>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
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
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default AddContact;
