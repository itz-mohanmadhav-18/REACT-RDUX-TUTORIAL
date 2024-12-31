import React from "react";
import Card  from "./components/card";

function App() {
  return (
        <div className="flex gap-4">
        <Card photo="https://media-uk.landmarkshops.in/cdn-cgi/image/h=750,w=750,q=85,fit=cover/homecentre/1000012532568-1000012532567_01-2100.jpg" title="coffee mug" category="Mugs" />  
        <Card photo="https://st2.depositphotos.com/3480741/10149/i/450/depositphotos_101493694-stock-photo-white-tea-cup.jpg" title="gift mug " category="Mugs" />  
        <Card photo="https://thebanyantee.com/cdn/shop/files/Beige-T-shirt_a3897414-6101-466a-b6bc-18b5e24c2c7e.jpg?v=1721381182&width=1920" title="t-shirt  " category="Clothing" />  
        <Card photo="" title="iphone" category="Electroincs" />  
        </div>
  );
}

export default App;
