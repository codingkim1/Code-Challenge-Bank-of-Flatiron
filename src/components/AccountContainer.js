import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transaction, setTransaction] = useState([])
  const [queryTransaction, setQueryTransaction] = useState("")

  useEffect(()=>{
    fetch("http://localhost:8001/transactions?q=" + queryTransaction)
    .then((resp)=>resp.json())
    .then(transaction=>setTransaction(transaction))
  }, [queryTransaction])

  function handleSearch(e){
    setQueryTransaction(e.target.value)
  }
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <AddTransactionForm />
      <TransactionsList transactions={transaction}/>
    </div>
  );
}
export default AccountContainer;
