"use client";

import React from "react";

const Project = ({ index, title, setModal }) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2 className="dark:text-white">{title}</h2>
    </div>
  );
};

export default Project;
