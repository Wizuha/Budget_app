import React, { useEffect, useState } from "react";
import BudgetForm from "./BudgetForm";
import Budget from "./Budget";
import { v4 as uuidv4 } from "uuid";
import EditBudgetApp from "./EditBudgetApp";
import './BudgetForm.css';
import './BudgetWrapper.css'

export default function BudgetWrapper() {
  const [purchases, SetPurchases] = useState([]);
  const [gains, SetGains] = useState([]);
  const [totalPurchases, SetTotalPurchases] = useState(0);
  const [totalGains, SetTotalGains] = useState(0);
  const [modifInput, setModifInput] = useState(false);
  const [choiceBudget, setChoiceBudget] = useState(false);

  const addPurchase = (value) => {
    value.trim() === ""
    ? alert("Entrez une valeur")
    : SetPurchases([
      ...purchases,
      { id: uuidv4(), purchase: value, isEditing: false },
    ]);
  };

  const totalPurchase = (purchases) => {
    let totality = 0;
    for (let i = 0; i < purchases.length; i++) {
      totality = totality + parseFloat(purchases[i].purchase);
    }
    SetTotalPurchases(totality.toFixed(2));
  };

  useEffect(() => {
    totalPurchase(purchases);
  }, [purchases]);

  const addGain = (value) => {
    value.trim() === ""
    ? alert("Entrez une valeur")
    : SetGains([...gains, { id: uuidv4(), gain: value, isEditing: false }]);
  };

  const totalGain = (gains) => {
    let totality = 0;
    for (let i = 0; i < gains.length; i++) {
      totality = totality + parseFloat(gains[i].gain);
    }
    SetTotalGains(totality.toFixed(2));
  };

  useEffect(() => {
    totalGain(gains);
  }, [gains]);

  const [diffTotatl, setDiffTotal] = useState(0);

  useEffect(() => {
    setDiffTotal(totalGains - totalPurchases);
  }, [totalGains, totalPurchases]);

  const ciblingPurchase = (id) => {
    setChoiceBudget(true);
    setModifInput(!modifInput);
    SetPurchases(
      purchases.map((purchase) =>
        id === purchase.id
          ? { ...purchase, isEditing: !purchase.isEditing }
          : purchase
      )
    );
  };

  const modifPurchase = (newPurchase) => {
    SetPurchases(
      purchases.map((purchase) =>
        purchase.isEditing === true
          ? {
              ...purchase,
              purchase: newPurchase,
              isEditing: !purchase.isEditing,
            }
          : purchase
      )
    );
    setModifInput(!modifInput);
    console.log(purchases);
  };

  const ciblingGain = (id) => {
    setChoiceBudget(false);
    setModifInput(!modifInput);
    SetGains(
      gains.map((gain) =>
        id === gain.id ? { ...gain, isEditing: true } : gain
      )
    );
  };

  const modifGain = (newGain) => {
    SetGains(
      gains.map((gain) =>
        gain.isEditing === true
          ? {
              ...gain,
              gain: newGain,
              isEditing: !gain.isEditing,
            }
          : gain
      )
    );
    console.log(gains);
    setModifInput(!modifInput);
  };

  const deletePurchase = (id) => {
    SetPurchases(purchases.filter((purchase) => purchase.id !== id));
  };

  const deleteGain = (id) => {
    SetGains(gains.filter((gain) => gain.id !== id));
  };

  const closeEdit = () => {
    setModifInput(!modifInput);
  }

  return (
    <div className="Application">
      <BudgetForm addP={addPurchase} addG={addGain} />
      <Budget
        budgetPurchases={purchases}
        totalP={totalPurchases}
        budgetGains={gains}
        totalG={totalGains}
        diffPurchasesGains={diffTotatl}
        ciblingP={ciblingPurchase}
        ciblingG={ciblingGain}
        deleteCiblingP={deletePurchase}
        deleteCiblingG={deleteGain}
      />
      {modifInput ? (
        <EditBudgetApp
          choiceBudget={choiceBudget}
          modifPurchase={modifPurchase}
          modifGain={modifGain}
          closeEdit={closeEdit}
        />
      ) : null}
    </div>
  );
}
