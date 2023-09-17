import React from "react";
import MyContext from "./myContext";

function myState(props) {
  const state = {
    name: "Prakash",
    email: "prakash@gmail.com",
  };
  return (
    <MyContext.Provider value={state}>{props.children}</MyContext.Provider>
  );
}

export default myState;
