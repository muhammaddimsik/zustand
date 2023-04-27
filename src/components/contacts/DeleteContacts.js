import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useContactsStore } from "../../stores/Api";
import { useParams } from "react-router-dom";

function DeleteContacts() {
  const { id } = useParams();
  const deleteContact = useContactsStore((state) => state.deleteContact);
  const [contact, setContact] = useState({
    id: id,
    name: "",
    number: "",
  });

  console.log(contact.id);

  const conifirmDeleteHandeler = async () => {
    await deleteContact(id);
  };

  const modal = () => {
    Swal.fire({
      icon: "question",
      title: "Apakah anda yakin ingin menghapus kontak ini?",
      showCloseButton: true,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: "Ya!",
      cancelButtonText: "Tidak!",
      preConfirm: function () {
        conifirmDeleteHandeler(id);
        return true;
      },
    });
  };

  return (
    <div>
      <button className="underline text-sm" onClick={(e) => modal()}>
        hapus
      </button>
    </div>
  );
}

export default DeleteContacts;
