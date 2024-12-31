import React from "react";
import Card  from "./components/card";

function App() {
  return (
        <div className="flex gap-4">
        <Card title="coffee mug" />  
        <Card title="gift mug "/>  
        <Card title="t-shirt "/>  
        <Card title="iphone"/>  
        </div>
  );
}

export default App;
