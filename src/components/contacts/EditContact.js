import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getContactById, useContactsStore } from "../../stores/Api";

function EditContact() {
  const name = useRef("");
  const number = useRef("");
  const { id } = useParams();
  const contactToEdit = useContactsStore(getContactById(id));
  const editContact = useContactsStore((state) => state.EditContact);
  const navigate = useNavigate();

  useEffect(() => {
    if (contactToEdit) {
      name.target.value = contactToEdit.name;
      number.target.value = contactToEdit.number;
    }
  }, []);

  const updateHandle = async () => {
    let payload = {
      name: name.target.value,
      number: number.target.value,
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
            ref={name}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="number">Number</label>
          <input
            className="border block px-2 py-1 rounded"
            id="number"
            type="text"
            required
            ref={number}
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
