"use client";
import React, { useState } from "react";

const DualList = () => {
  const listItem = [
    "Pizza",
    "Burger",
    "Sandwitch",
    "Fries",
    "Shake",
    "Pasta",
    "Biryani",
    "Dosa",
    "Idli",
  ];
  const [leftListItem, setLeftListItem] = useState<String[]>(listItem);
  const [rightListItem, setRightListItem] = useState<String[]>([]);
  const [ltr, setLtr] = useState<String>("");

  const leftToRight = (ltr: String) => {
    if (ltr !== "") {
      if (rightListItem.includes(ltr)) {
        console.log("can not add");
      } else {
        setRightListItem([...rightListItem, ltr]);
        const item = leftListItem.filter((item) => item !== ltr);
        setLeftListItem(item);
        setLtr("");
      }
    }
  };

  const rightToLeft = (ltr: String) => {
    if (ltr !== "") {
      if (leftListItem.includes(ltr)) {
        console.log("can not add");
      } else {
        setLeftListItem([...leftListItem, ltr]);
        const item = rightListItem.filter((item) => item !== ltr);
        setRightListItem(item);
        setLtr("");
      }
    }
  };

  const allLeftToRight = () => {
    setRightListItem([...rightListItem, ...leftListItem]);
    setLeftListItem([]);
  };
  const allRightToLeft = () => {
    setLeftListItem([...leftListItem, ...rightListItem]);
    setRightListItem([]);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        gap: 12,
        padding: 5,
      }}
    >
      <div
        style={{
          padding: "20px",
          maxHeight: "300px",
          minHeight: "300px",
          width: "40%",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: 8,
        }}
      >
        {leftListItem.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                cursor: "pointer",
                lineHeight: 1.5,
                backgroundColor: ltr !== item ? "#ffffff00" : "#d1d1d1",
              }}
              onClick={() => setLtr(item)}
            >
              {item}
            </li>
          );
        })}
      </div>
      <div
        style={{
          padding: 2,
          maxHeight: 200,
          width: "10%",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "center",
        }}
      >
        <button
          disabled={leftListItem.length == 0}
          style={{
            padding: 1,
            borderRadius: 6,
            width: "65%",
            cursor: "pointer",
            backgroundColor: "cyan",
          }}
          onClick={allLeftToRight}
        >{`>>`}</button>
        <button
          disabled={leftListItem.length == 0}
          style={{
            padding: 1,
            borderRadius: 6,
            width: "65%",
            cursor: "pointer",
            backgroundColor: "cyan",
          }}
          onClick={() => leftToRight(ltr!)}
        >{`>`}</button>
        <button
          disabled={rightListItem.length == 0}
          style={{
            padding: 1,
            borderRadius: 6,
            width: "65%",
            cursor: "pointer",
            backgroundColor: "cyan",
          }}
          onClick={() => {
            rightToLeft(ltr!);
          }}
        >{`<`}</button>
        <button
          disabled={rightListItem.length == 0}
          style={{
            padding: 1,
            borderRadius: 6,
            width: "65%",
            cursor: "pointer",
            backgroundColor: "cyan",
          }}
          onClick={allRightToLeft}
        >{`<<`}</button>
      </div>
      <div
        style={{
          padding: "20px",
          maxHeight: "300px",
          minHeight: "300px",
          width: "40%",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
          borderRadius: 8,
        }}
      >
        {rightListItem.map((item, index) => {
          return (
            <li
              key={index}
              style={{
                cursor: "pointer",
                lineHeight: 1.5,
                backgroundColor: ltr !== item ? "#ffffff00" : "#d1d1d1",
              }}
              onClick={() => setLtr(item)}
            >
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DualList;
