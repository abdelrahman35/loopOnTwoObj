import React, { useState } from "react";
import styles from "./child.module.css";
// {
//     name: string;
//     accountNumber: string;
//     amount: string;
//     currency: string;
//   };
interface Iprops {
  labelsData: any;

  valuesData: any;
}
const ChildCompomemt = ({ labelsData, valuesData }: Iprops) => {
  const labelArr = Object.entries(labelsData);
  const valueArr = Object.entries(valuesData);
  const testArr = [];
  const finalArr = valueArr.map((val) =>
    labelArr.map((label) =>
      label[0] === val[0] ? `${label[1]}:${val[1]}` : false
    )
  );
  for (let i = 0; i < finalArr.length; i++) {
    const insideArray = finalArr[i];
    testArr.push(insideArray.filter((el: any) => el !== false));
  }
  const arrayToLoop = testArr
    .filter((item: any) => item.length > 0)
    .map((test: any) => test[0].split(":"));
  console.log(arrayToLoop);
  return (
    <div>
      <h1>child component</h1>
      {arrayToLoop.map((cell: any) => (
        <div className="cell">
          <div className={styles.cellTitle}>{cell[0]}</div>
          <div className={styles.cellContent}>{cell[1]}</div>
        </div>
      ))}
    </div>
  );
};

export default ChildCompomemt;
