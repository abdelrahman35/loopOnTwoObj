import React, { useState } from "react";
import styles from "./child.module.css";

interface Iprops {
  labelsData: any;

  valuesData: any;
}
const ChildCompomemt = ({ labelsData, valuesData }: Iprops) => {
  let result = [];
  for (let key in labelsData) {
    result.push([labelsData[key], valuesData[key]]);
  }
  return (
    <div>
      <h1>child component</h1>
      {result.map((cell: any) => (
        <div className="cell" key={cell[0]}>
          <div className={styles.cellTitle}>{cell[0]}</div>
          <div className={styles.cellContent}>{cell[1]}</div>
        </div>
      ))}
    </div>
  );
};

export default ChildCompomemt;
