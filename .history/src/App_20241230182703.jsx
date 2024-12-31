import React from "react";
import Button from "@mui/material/Button";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button
        variant="contained"
        className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Material UI Button with Tailwind
      </Button>
    </div>
  );
}

export default App;
