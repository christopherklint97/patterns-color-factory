import React from "react";
import { Link } from "react-router-dom";
import "./Color.css";

interface ColorProps {
  hex: string;
  color: string;
  history: { push: (url: string) => void };
}

function Color({ hex, color, history }: ColorProps) {
  if (!hex) {
    history.push("/colors");
  }

  return (
    <div className="Color" style={{ backgroundColor: hex }}>
      <p>this is {color}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/">Go back</Link>
      </p>
    </div>
  );
}

export default Color;
