import React from "react";
import { useStore } from "../stores/Store";
import { shallow } from "zustand/shallow";

function Navbar() {
  const state = useStore((state) => ({ user: state.user }), shallow);
  console.log("render");
  return <nav>User: {state.user.name}</nav>;
}

export default Navbar;
