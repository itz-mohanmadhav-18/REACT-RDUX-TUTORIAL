import React from "react";
import Card  from "./components/card";

function App() {
  return (
        <div className="flex gap-4">
        <Card photo="" title="coffee mug" category="Mugs" />  
        <Card photo="" title="gift mug " category="Mugs" />  
        <Card photo="" title="t-shirt  " category="Clothing" />  
        <Card photo="" title="iphone" category="Electroincs" />  
        </div>
  );
}

export default App;
