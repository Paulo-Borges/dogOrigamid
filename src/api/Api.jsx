import React from "react";
import UserPost from "../api/endpoints/UserPost.jsx";
import TokenPost from "./endpoints/TokenPost.jsx";

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <br />
      <h2>TOKEN POST</h2>
      <TokenPost />
    </div>
  );
};

export default Api;
