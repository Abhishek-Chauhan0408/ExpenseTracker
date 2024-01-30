import React from 'react'
import { createContext,useState } from 'react'

export const expenseContext=createContext();

const Context = (props) => {
    const [expenses, setexpenses] = useState(
        JSON.parse(localStorage.getItem("expenses")) || []
    )
  return (
    <expenseContext.Provider value={[expenses, setexpenses]}>

        {props.children}

    </expenseContext.Provider>
  )
}

export default Context