import { useState } from 'react'
import './App.css'
import Graph from './Graph'
import Cell from './Cell'

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
      isDragging: false,
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
    if (e.button === 1) {
      setSelection(prev => ({
        ...prev,
        end: cell,
        isDragging: true
      }))
    }
  }

  return (
    <>
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
