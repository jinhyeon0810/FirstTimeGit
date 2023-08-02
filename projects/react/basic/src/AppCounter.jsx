import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

export default function AppCounter() {
  const [total, setTotal] = useState(0);
  return (
    <>
      <div className="container">
        <span className="banner">
          Total Count :{total} {total > 10 ? "fire" : "water"}
        </span>
        <Counter total={total} onClick={() => setTotal((prev) => prev + 1)} />
        <Counter total={total} onClick={() => setTotal((prev) => prev + 1)} />
      </div>
    </>
  );
}
