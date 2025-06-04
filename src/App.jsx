import { useState } from 'react'
import './App.css'
import Cell from './Cell'
import Graph from './Graph'

function handleAddRow() {
  setNumRows(numRows + 1)
}

function handleAddColumn() {
  setNumColumns(numRows + 1)
}

export default function App() {
  const [rows, setRows] = useState(1)
  const [columns, setColumns] = useState(1)

  // <Button func=handleAddColumn text="Add Column"/>
  // <Button func=handleAddRow text="Add Row"/>
  return (
    <>
      <svg version="1.1"
      width="80vmin" height="80vmin"
      xmlns="http://www.w3.org/2000/svg">
        <Graph numRows={5} numColumns={5}/>
      </svg>
    </>
  )
}
