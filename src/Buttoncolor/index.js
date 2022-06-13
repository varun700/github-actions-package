import React from "react";
import "./style.css";
const index = ({ content }) => {
  return (
    <div>
      <button className="primary">{content}</button>
    </div>
  );
};

export default index;
