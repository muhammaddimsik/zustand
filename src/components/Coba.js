import axios from "axios";
import React, { useEffect, useState } from "react";

function Coba() {
  const [nasabah, setNasabah] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://ec2-13-215-189-95.ap-southeast-1.compute.amazonaws.com:6000/"
      )
      .then((res) => {
        setNasabah(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>testing</h1>
      {nasabah.map((n) => (
        <h1 key={n.id}>{n.title}</h1>
      ))}
    </div>
  );
}

export default Coba;
