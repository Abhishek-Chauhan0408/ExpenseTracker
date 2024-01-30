import React, { useCallback, useContext } from "react";
import { expenseContext } from "./Context";

const Show = () => {
    
    const [expenses,setexpenses]=useContext(expenseContext)
    return (
        <>
            <h2>
                Total Spent: {expenses.reduce((ac, cv) => ac + +cv.amount, 0)}{" "}
            </h2>
            <ol>
                {expenses.length === 0
                    ? "No Data Present"
                    : expenses.map((e, index) => (
                          <li key={index}>
                              {e.remark}({e.payment}) - {e.category} -{" "}
                              {e.amount} <span>❌</span>
                          </li>
                      ))}
            </ol>
        </>
    );
};

export default Show;