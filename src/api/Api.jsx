import React from "react";
import UserPost from "../api/endpoints/UserPost.jsx";
import TokenPost from "./endpoints/TokenPost.jsx";
import PhotoPost from "./endpoints/PhotoPost.jsx";

const Api = () => {
  return (
    <div>
      <h2>USER POST</h2>
      <UserPost />
      <br />
      <h2>TOKEN POST</h2>
      <TokenPost />
      <br />
      <h2>PHOTO POST</h2>
      <PhotoPost />
    </div>
  );
};

export default Api;
