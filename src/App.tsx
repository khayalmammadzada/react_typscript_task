import React, { useState, useEffect } from "react";
import Cube from "./components/Cube";
import Cylinder from "./components/Cylinder";
import Sphere from "./components/Sphere";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    // Update the count every 100ms
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const value = count % 10;

  return (
    <div>
      <h1>Rotating 3D Shapes</h1>
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <h2>Cube</h2>
          <Cube />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Cylinder</h2>
          <Cylinder />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Sphere</h2>
          <Sphere />
        </div>
      </div>
    </div>
  );
};

export default App;
