import DualList from "./dualList/DualList";
import FaqAccordian from "./faqAccordian/FaqAccordian";

export default function Home() {
  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "95vh",
    //   }}
    // >
    //   <DualList />
    // </div>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
      }}
    >
      <FaqAccordian />
    </div>
  );
}
