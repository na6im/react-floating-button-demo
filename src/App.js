import React from "react";
import "./App.css";
import FloatingButton from "react-floating-button";
import Item from "react-floating-button";
import logo from "./assets/DOWNLOAD.svg";
import logo2 from "./assets/FORWARD 2.svg";
import logo3 from "./assets/GRID.svg";
import logo4 from "./assets/GIFT.svg";
import logo5 from "./assets/HOME.svg";
import logo6 from "./assets/MAP.svg";
import logo7 from "./assets/MAP PIN.svg";
import logo8 from "./assets/MUSIC.svg";

function App() {
  return (
      <div className="App-header">
        <FloatingButton
            right={true}
            top={true}
            height={80}
            color={"black"}
        >
          <Item
              imgSrc={logo}
              onClick={() => {
                console.log("logo");
              }}
          />
          <Item
              imgSrc={logo2}
              onClick={() => {
                console.log("logo2");
              }}
          />
          <Item
              imgSrc={logo3}
              onClick={() => {
                console.log("logo3");
              }}
          />
          <Item
              imgSrc={logo4}
              onClick={() => {
                console.log("logo4");
              }}
          />
          <Item
              imgSrc={logo5}
              onClick={() => {
                console.log("logo5");
              }}
          />
          <Item
              imgSrc={logo6}
              onClick={() => {
                console.log("logo6");
              }}
          />
          <Item
              imgSrc={logo7}
              onClick={() => {
                console.log("logo7");
              }}
          />
          <Item
              imgSrc={logo8}
              onClick={() => {
                console.log("logo8");
              }}
          />
        </FloatingButton>
        <FloatingButton right={false} top={true} height={30}>
          <Item
              imgSrc={logo}
              onClick={() => {
                console.log("logo");
              }}
          />
          <Item
              imgSrc={logo2}
              onClick={() => {
                console.log("logo2");
              }}
          />
          <Item
              imgSrc={logo3}
              onClick={() => {
                console.log("logo3");
              }}
          />
        </FloatingButton>
        <FloatingButton right={false} top={false} height={200}>
          <Item
              imgSrc={logo}
              onClick={() => {
                console.log("logo");
              }}
          />
          <Item
              imgSrc={logo2}
              onClick={() => {
                console.log("logo2");
              }}
          />
          <Item
              imgSrc={logo3}
              onClick={() => {
                console.log("logo3");
              }}
          />
          <Item
              imgSrc={logo4}
              onClick={() => {
                console.log("logo4");
              }}
          />
          <Item
              imgSrc={logo5}
              onClick={() => {
                console.log("logo5");
              }}
          />
        </FloatingButton>
        <FloatingButton right={true} top={false} height={100}>
          <Item
              imgSrc={logo}
              onClick={() => {
                console.log("logo");
              }}
          />
        </FloatingButton>
      </div>
  );
}

export default App;
