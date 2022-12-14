import { authService } from "fbase";
import React from "react";
import { useHistory } from "react-router-dom";

export default () => {
  const onLogOutClick = () => {
    authService.signOut();
  };
  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};
