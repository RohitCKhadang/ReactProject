import React from "react";
import ReactDOM from "react-dom/client";

const HeadCom = ()=> (
<h1 className="heading">
    Namaste React🛻</h1>
    );
const HeadingComponent = ()=>(
<h1 className="heading">
    Namaste React 🚌</h1>
    );
const FnComponent = ()=>(
    <div id="container" className="heading">
    <HeadingComponent/>
    {HeadCom()}
<h1>It is a functional component</h1>
</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<FnComponent />);