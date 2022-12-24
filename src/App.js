import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";

console.log("hello");
function App() {
  return (
    <body>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Home />
        </div>
      </div>
    </body>
  );
}

export default App;
