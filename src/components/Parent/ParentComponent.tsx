import React from "react";
import ChildCompomemt from "../Child/ChildComponent";

export interface valuesInterface {
  name: string;
  accountNumber: string;
  amount: number;
  currency: string;
  date: number;
}
const ParentComponent = () => {
  const labelData = {
    name: "Beneficiary Name",
    accountNumber: "Account Number",
    amount: "Amount",
    currency: "Currency",
  };
  const valuesData: valuesInterface = {
    name: "Abdelrahman Tarek Omar",
    accountNumber: "5075212200120325",
    amount: 250,
    currency: "EGP",
    date: 20221210,
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <br></br>
      <hr />
      <ChildCompomemt labelsData={labelData} valuesData={valuesData} />
    </div>
  );
};

export default ParentComponent;
