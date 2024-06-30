import React from "react";
import { Tldraw } from "tldraw";
import "tldraw/tldraw.css";

const Notepad = () => {
  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <Tldraw />
    </div>
  );
};

export default Notepad;
