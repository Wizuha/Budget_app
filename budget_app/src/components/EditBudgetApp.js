import React, { useState } from "react";
import "./isEditingBudget.css";

export default function EditBudgetApp({
  choiceBudget,
  modifPurchase,
  modifGain,
  closeEdit,
  displayPurchases,
  displayGains,
}) {
  const [newValue, SetNewValue] = useState("");

  const hadnleSubmitP = () => {
    if (newValue.trim() === "") {
      alert("Entrez une valeur");
    } else {
      modifPurchase(newValue);
      SetNewValue("");
    }
  };

  const hadnleSubmitG = () => {
    if (newValue.trim() === "") {
      alert("Entrez une valeur");
    } else {
      modifGain(newValue);
      SetNewValue("");
    }
  };

  const handleChange = (event) => {
    if (/^\d*\.?\d*$/.test(event.target.value) || event.target.value === "") {
      SetNewValue(event.target.value);
    }
  };

  return (
    <div className="editBudgetAll">
      <div className="edit-content">
        <div className="close">
          <div className="close-content" onClick={closeEdit}>
            X
          </div>
        </div>
        <h1>Modification</h1>
        <div className="modif-content">
          <input
            value={newValue}
            onChange={handleChange}
            type="text"
            placeholder={
              choiceBudget === true
                ? displayPurchases.map((e) => `${e.purchase}€`).join(", ")
                : displayGains.map((e) => `${e.gain}€`).join(", ")
            }
          />
        </div>

        {choiceBudget === true ? (
          <button onClick={hadnleSubmitP}>Modifier la somme</button>
        ) : (
          <button onClick={hadnleSubmitG}>Modifier la somme</button>
        )}
      </div>
    </div>
  );
}
