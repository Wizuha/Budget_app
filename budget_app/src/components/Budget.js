import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./Budget.css";

export default function Budget({
  budgetPurchases,
  budgetGains,
  diffPurchasesGains,
  ciblingP,
  ciblingG,
  deleteCiblingP,
  deleteCiblingG,
}) {
  return (
    <div className="Budget">
      <div className="tableaux">
        <div className="achats">
          <h1>Achats</h1>
          {budgetPurchases.map((e, index) => (
            <div id={index} className="sum">
              <div>
                <p>{e.purchase}€</p>
              </div>
              <div className="bouttons">
                <button onClick={() => ciblingP(e.id)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => deleteCiblingP(e.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="gains">
          <h1>Gains</h1>
          {budgetGains.map((e, index) => (
            <div id={index} className="sum">
              <div>
                <p>{e.gain}€</p>
              </div>
              <div className="bouttons">
                <button onClick={() => ciblingG(e.id)}>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => deleteCiblingG(e.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="totalPurchase">{diffPurchasesGains}€</div>
    </div>
  );
}
