import React from "react";

function Transaction({ Date, description, category, amount}) {
  return (
    <tr>
      <td>{Date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
