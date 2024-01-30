import React, { useState } from "react";
import Create from "./Create";
import Show from "./Show";
import Filter from "./Filter";
 
const App = () => {
     
    return (
        <div>
            <h3>Create Expenses</h3>
            <Create />
            <hr />
            <h2>search expense by query</h2>
            <Filter/>
            <hr />
            <h2>Expense List</h2>
          
            <Show />
        </div>
    );
};

export default App;