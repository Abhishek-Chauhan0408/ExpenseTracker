import React, { useContext, useState } from 'react'
import { expenseContext } from './Context';
const Filter = () => {
    const [expenses] = useContext(expenseContext);
    const [key, setkey] = useState("payment");
    const [values, setvalues] = useState("");
    const [filterExpenses, setfilterExpenses] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault();
        const filterExpenses =expenses.filter((e)=> e[key] == values);
        setfilterExpenses(filterExpenses);
        console.log(filterExpenses);
    }
    
  return (
    <>
    <form onSubmit={submitHandler}>
     <input onChange={(e)=>setvalues(e.target.value)} type="text" placeholder='Enter type' value={values} />
    <select onChange={(e)=>setkey(e.target.value)} name="key" value={key} >
         <option value="remark">remark</option>
         <option value="category">category</option>
         <option value="payment">payment</option>
          
    </select>
   <button>Filter</button>
</form>
<hr />
{filterExpenses.length ===0 ? "no filter selected":filterExpenses.map((e,index)=>(
  <p key={index}>
      {e.remark}({e.payment})-{e.category}-{e.amount}{" "} 
      <span>❌</span>
  </p>
))}
    </>

  )
}

export default Filter