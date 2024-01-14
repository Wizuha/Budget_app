import React, { useState } from "react";
import "./BudgetForm.css";

export default function BudgetForm({ addP, addG }) {
  const [value, setValue] = useState("");
  const hadnleSubmitP = () => {
    addP(value);
    setValue("");
  };
  const hadnleSubmitG = () => {
    addG(value);
    setValue("");
  };
  const handleChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value) || event.target.value === "") {
      setValue(event.target.value);
    }
  };

  return (
    <div className="App">
      <h1>Calcul de ton budget</h1>
      <div className="input">
        <input
          onChange={handleChange}
          placeholder="Entrer une valeur"
          type="text"
          value={value}
        />
        <div className="button">
          <button onClick={hadnleSubmitP}>Ajout Achat</button>
          <button onClick={hadnleSubmitG}>Ajout Gain</button>
        </div>
      </div>
    </div>
  );
}
