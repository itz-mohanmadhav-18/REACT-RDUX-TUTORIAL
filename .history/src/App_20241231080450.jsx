import React from "react";
import Card  from "./components/card";

function App() {
  return (
        <div className="flex gap-4">
        <Card title="coffee mug" category="Mugs" />  
        <Card title="gift mug " category="Mugs" />  
        <Card title="t-shirt  " category="Clothing" />  
        <Card title="iphone" category="Electroincs" />  
        </div>
  );
}

export default App;
