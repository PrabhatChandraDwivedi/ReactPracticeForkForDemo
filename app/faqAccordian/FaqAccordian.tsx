"use client";
import React, { useState } from "react";

const FaqAccordian = () => {
  const [activeTab, setActiveTab] = useState<Number[]>([]);
  const data = [
    {
      id: 1,
      question: "What is HTML ?",
      answer:
        "Hypertext Markup Language (HTML) is a computer language that makes up most web pages and online applications. A hypertext is a text that is used to reference other pieces of text, while a markup language is a series of markings that tells web servers the style and structure of a document. HTML is very simple to learn and use.",
    },
    {
      id: 2,
      question: "What is CSS ?",
      answer:
        "CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users. CSS is designed to make style sheets for the web. It is independent of HTML and can be used with any XML-based markup language. CSS is popularly called the design language of the web.",
    },
    {
      id: 3,
      question: "What is JavaScript ?",
      answer:
        "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third of the web trio.",
    },
    {
      id: 4,
      question: "What is React ?",
      answer:
        "React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels. React was created by Jordan Walke, a software engineer at Facebook.",
    },
  ];

  const toggleTab = (id: Number) => {
    if (!activeTab.includes(id)) {
      setActiveTab([...activeTab, id]);
    } else {
      const updatedData = activeTab.filter((item) => item !== id);
      setActiveTab(updatedData);
    }
  };
  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100%",
        paddingTop: "100px",
        paddingBottom: "35px",
        backgroundImage: 'url("./assets/bgImage.svg")',
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          height: "min-content",
          border: "1px solid black",
          padding: "20px",
          borderRadius: 6,
          backgroundColor: "hsl(0, 0%, 100%)",
        }}
      >
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            fontWeight: 700,
            paddingBottom: "16px",
            paddingLeft: "8px",
            gap: 12,
            fontFamily: "Work Sans",
          }}
        >
          {" "}
          <img
            src="./assets/star.svg"
            style={{ width: 25, fontFamily: "Work Sans" }}
          />
          FAQs
        </h2>

        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="container"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "8px",
                paddingBottom: "16px",
                gap: 5,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "hsl(292, 42%, 14%)",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                  fontFamily: "Work Sans",
                }}
              >
                <div className="label">{item.question}</div>
                <div className="label" onClick={() => toggleTab(item.id)}>
                  {activeTab.includes(item.id) ? (
                    <img src="./assets/minus.svg" style={{ width: 25 }} />
                  ) : (
                    <img src="./assets/plus.svg" style={{ width: 25 }} />
                  )}
                </div>
              </div>
              <div
                className="content"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "14px",
                  height: activeTab.includes(item.id) ? "auto" : "0px",
                  overflow: "hidden",
                  fontFamily: "Work Sans",
                }}
              >
                {item.answer}
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default FaqAccordian;
