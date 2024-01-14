import React,{useState} from "react";

export default function EditBudgetApp({choiceBudget, modifPurchase, modifGain}) {
  const [newValue, SetNewValue] = useState("");

  const hadnleSubmitP = () => {
    if (newValue.trim() === "") {
      alert("Entrez une valeur");
    }
    else {
      modifPurchase(newValue);
      SetNewValue("");
    }
 
  }

  const hadnleSubmitG = () => {
    if(newValue.trim() === ""){
      alert("Entrez une valeur")
    }
    else {
      modifGain(newValue);
      SetNewValue("");
    }
    
  }

  const handleChange = (event) => {
        if (
          /^\d*\.?\d*$/.test(event.target.value) ||
          event.target.value === "" 
        ) {
          SetNewValue(event.target.value);
        }

  }

  return (
    <div>
      <input
        value={newValue}
        onChange={handleChange}
        type="text"
        placeholder="Nouvelle valeur"
      />
      {choiceBudget === true ? (
        <button onClick={hadnleSubmitP}>
          Modifier la somme
        </button>
      ) : (
        <button onClick={hadnleSubmitG}>
          Modifier la somme</button>
      )}
    </div>
  );
}
