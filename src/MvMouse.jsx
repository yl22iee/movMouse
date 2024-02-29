import React, { useState } from "react";

export default function MvMouse() {
  const [XY, setXY] = useState({ x: 0, y: 0 });
  const handlemouse = (e) => {
    setXY({ x: e.clientX, y: e.clientY });
    console.log(XY);
  };
  return (
    <div onMouseMove={handlemouse} className="container">
      <div
        style={{ transform: `translate(${XY.x}px, ${XY.y}px)` }}
        className="pointer"
      />
    </div>
  );
}
