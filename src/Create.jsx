import React, { useContext, useState } from 'react'
import { expenseContext } from './Context'
const Create = () => {
    const [expenses, setexpenses] = useContext(expenseContext)
    const [amount, setamount] = useState(0)
    const [remark, setremark] = useState("")
    const [category, setcategory] = useState("")
    const [payment, setpayment] = useState("cash")
    const submitHandler=(e)=>{
        e.preventDefault();
        const newExpense={amount,remark,category,payment}
        const copyExpense=[...expenses];
        copyExpense.push(newExpense);
        setexpenses(copyExpense);

        // setexpenses([...expenses,newExpense]);
       localStorage.setItem("expenses",JSON.stringify(copyExpense));
    }
  return (
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>setamount(e.target.value)} type="number" placeholder='amount' value={amount} />
        <input onChange={(e)=>setremark(e.target.value)} type="text" placeholder='remark' value={remark} />
        <input onChange={(e)=>setcategory(e.target.value)} type="text" placeholder='category' value={category} />
        <select onChange={(e)=>setpayment(e.target.value)} name="payment" value={payment} >
             <option value="cash">cash</option>
             <option value="online">online</option>
             <option value="card">card</option>
              
        </select>
       <button>Add Expense</button>
    </form>
  )
}

export default Create