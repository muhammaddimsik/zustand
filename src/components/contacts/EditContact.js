import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContactById, useContactsStore } from "../../stores/Api";

function EditContact() {
  const { id } = useParams();
  const contactToEdit = useContactsStore(getContactById(id));
  const editContact = useContactsStore((state) => state.EditContact);
  const callApi = useContactsStore((state) => state.getApi);
  const navigate = useNavigate();
  const [contacts, setContacts] = useState({
    name: "",
    number: "",
  });

  useEffect(() => {
    callApi();
  }, []);

  const updateHandle = async () => {
    let payload = {
      name: contacts.name,
      number: contacts.number,
      id: Number(id),
    };
    await editContact(payload);
    navigate("/");
  };
  return (
    <div>
      <h1 className="font-bold">EDIT CONTACT</h1>
      <hr />
      <form className="mt-4">
        <div className="mb-2">
          <label htmlFor="name">Name</label>
          <input
            className="border block px-2 py-1 rounded"
            id="name"
            type="text"
            required
            value={contacts.name}
            onChange={(e) => setContacts({ ...contacts, name: e.target.value })}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="number">Number</label>
          <input
            className="border block px-2 py-1 rounded"
            id="number"
            type="text"
            required
            value={contacts.number}
            onChange={(e) =>
              setContacts({ ...contacts, number: e.target.value })
            }
          />
        </div>
        <button
          className="py-2 px-4 rounded bg-orange-700 text-white text-sm"
          onClick={updateHandle}
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default EditContact;
