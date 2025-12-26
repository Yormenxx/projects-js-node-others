import { useState } from "react";
import Grid from "./components/Grid"


function App() {
 
    const puzzle = Array(9).fill(null).map(() => Array(9).fill(null));

    const board = Array(9).fill(null).map(() => Array(9).fill(null));

    const [selected, setSelected] = useState(null);


  return (
    <>
      <h1 className="text-red-600">SUDOKU</h1>

      <Grid board={board} puzzle={puzzle} selected={selected} setSelected={setSelected} />
    </>
  )
}

export default App
