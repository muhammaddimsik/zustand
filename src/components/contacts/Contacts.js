import React, { useEffect } from "react";
import { useContactsStore } from "../../stores/Api";
import { Link } from "react-router-dom";
function Show() {
  const contacts = useContactsStore();

  useEffect(() => {
    contacts.getApi();
  }, []);

  return (
    <div>
      <div className="text-right">
        <Link
          to="/add"
          className="text-right py-2 px-4 text-xs bg-lime-700 text-white rounded"
        >
          Add +
        </Link>
      </div>
      {contacts.contacts.map((contact) => (
        <div key={contact.id} className="mb-4">
          <div className="flex">
            <div className="w-4/12">
              <p className="font-bold">{contact.name}</p>
              <p className="mb-2">{contact.number}</p>
            </div>
            <Link
              className="w-10/12 text-sm underline"
              to={`/edit/${contact.id}`}
            >
              Edit
            </Link>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Show;
