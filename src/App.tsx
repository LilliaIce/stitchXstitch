import { useState } from 'react'
import './App.css'
import Graph from './Graph'
import Toolbar from './Toolbar'
import RowColumnInput from './RowColumnInput'

interface CellPosition {
  x: number
  y: number
}

interface SelectionState {
  start: CellPosition | undefined
  end: CellPosition | undefined
  isDragging: boolean
}

export default function App() {
  const [rows, setRows] = useState(5)
  const [columns, setColumns] = useState(5)
  const [selection, setSelection] = useState<SelectionState>({
    start: undefined,
    end: undefined,
    isDragging: false,
  })

  const handleSelectionStart = (cell: CellPosition) => {
    setSelection(prev => ({
      ...prev,
      start: cell,
      end: cell,
      isDragging: true,
    }))
  }

  const handleSelectionEnd = (cell: CellPosition) => {
    setSelection(prev => ({
      ...prev,
      end: cell,
      isDragging: false
    }))
  }

  const handleSelectionDrag = (cell: CellPosition, e: React.MouseEvent) => {
    if (selection.isDragging) {
      setSelection(prev => ({
        ...prev,
        end: cell,
        isDragging: true
      }))
    }
  }

  return (
    <>
      <Toolbar />
      <RowColumnInput 
        value={rows}
        onChange={(value) => setRows(value)}
      />
      <RowColumnInput 
        value={columns}
        onChange={(value) => setColumns(value)}
      />
      <svg version="1.1">
        <Graph
          numRows={rows}
          numColumns={columns}
          selection={selection}
          onSelectionStart={handleSelectionStart}
          onSelectionEnd={handleSelectionEnd}
          onSelectionDrag={handleSelectionDrag}
        />
      </svg>
    </>
  )
}
