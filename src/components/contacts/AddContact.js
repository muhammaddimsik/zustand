import React, { useState } from "react";
import { useContactsStore } from "../../stores/Api";
import { useNavigate } from "react-router-dom";

function AddContact() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const addContact = useContactsStore((state) => state.addContact);
  const navigate = useNavigate();

  const addHandeler = async () => {
    let payload = {
      name: name,
      number: number,
    };
    try {
      await addContact(payload);
      console.log("nabigate");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="font-bold">ADD CONTACT</h1>
      <hr />
      <form className="mt-4">
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input
            className="border block px-2 py-1 rounded"
            id="name"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="number">Number</label>
          <input
            className="border block px-2 py-1 rounded"
            id="number"
            type="text"
            required
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button
          className="py-2 px-4 rounded bg-orange-700 text-white text-sm"
          onClick={addHandeler}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddContact;
