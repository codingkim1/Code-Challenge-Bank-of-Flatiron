import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {
  const listedItems = transactions.map((item)=>{
    return <Transaction key={item.id} Date={item.date} description={item.description} category={item.category} amount={item.amount} />
  })
  return (
    <table className="ui celled striped padded table">
      <tbody>
      {/* {listedItems} */}
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {listedItems}
      </tbody>
    </table>
  );
}

export default TransactionsList;
