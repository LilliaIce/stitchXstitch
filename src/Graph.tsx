import { useState } from 'react'
import './App.css'
import Cell from './Cell'

interface CellPosition {
  x: number
  y: number
}

interface Selection {
  start?: CellPosition
  end?: CellPosition
}

interface GraphProps {
  numRows: number
  numColumns: number
  selection: Selection
  onSelectionStart: (cell: CellPosition) => void
  onSelectionEnd: (cell: CellPosition) => void
  onSelectionDrag: (cell: CellPosition, event: React.MouseEvent) => void
}

export default function Graph({
  numRows,
  numColumns,
  selection,
  onSelectionStart,
  onSelectionEnd,
  onSelectionDrag
}: GraphProps) {
  const xList: number[] = []
  const yList: number[] = []
  const selectCells: CellPosition[] = []

  for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= numColumns; j++) {
      xList.push(i * 10)
      yList.push(j * 10)
      selectCells.push({ x: i * 10, y: j * 10 })
    }
  }

  const isSelected = (cell: CellPosition): boolean => {
    if (!selection.start || !selection.end) return false

    const minX = Math.min(selection.start.x, selection.end.x)
    const maxX = Math.max(selection.start.x, selection.end.x)
    const minY = Math.min(selection.start.y, selection.end.y)
    const maxY = Math.max(selection.start.y, selection.end.y)

    return cell.x >= minX && cell.x <= maxX && cell.y >= minY && cell.y <= maxY
  }

  return (
    <>
      {selectCells.map((cell) => (
        <Cell
          key={`${cell.x},${cell.y}`}
          x={cell.x}
          y={cell.y}
          isSelected={isSelected(cell)}
          onMouseDown={(e: React.MouseEvent) => {
            onSelectionStart(cell);
          }}
          onMouseUp={(e: React.MouseEvent) => {
            onSelectionEnd(cell);
          }}
          onMouseMove={(e: React.MouseEvent) => {
            onSelectionDrag(cell, e)
          }}
        />
      ))}
    </>
  )
}
