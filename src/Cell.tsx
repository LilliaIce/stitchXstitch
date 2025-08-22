import { useState } from 'react'
import './App.css'

interface CellPosition {
  x: number
  y: number
}

interface CellProps {
  x?: number
  y?: number
  isSelected?: boolean
  onMouseDown: (e: React.MouseEvent) => void
  onMouseUp: (e: React.MouseEvent) => void
  onMouseMove: (e: React.MouseEvent) => void
}

export default function Cell({
  x = 10,
  y = 10,
  isSelected = false,
  onMouseDown,
  onMouseUp,
  onMouseMove
}: CellProps) {
  const [color, setColor] = useState('orange')
  const [symbol, setSymbol] = useState('')
  const [isHovered, setIsHovered] = useState(false)

  const x1 = x
  const y1 = y
  const x2 = x + 10
  const y2 = y + 10

  return (
    <g
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onMouseDown={(e) => {
        e.stopPropagation()
        onMouseDown(e)
      }}
      onMouseUp={(e) => {
        e.stopPropagation()
        onMouseUp(e)
      }}
      onMouseMove={(e) => {
        e.stopPropagation()
        onMouseMove(e)
      }}
    >
      <rect
        x={x1}
        y={y1}
        width={10}
        height={10}
        fill={color}
      />
      {isSelected && (
        <rect
          x={x1}
          y={y1}
          width={10}
          height={10}
          fill="lightblue"
          opacity={0.7}
        />
      )}
      <>
        <line x1={x1} y1={y1} x2={x1} y2={y2} stroke='black'/>
        <line x1={x2} y1={y1} x2={x2} y2={y2} stroke='black'/>
        <line x1={x1} y1={y1} x2={x2} y2={y1} stroke='black'/>
        <line x1={x1} y1={y2} x2={x2} y2={y2} stroke='black'/>
      </>
      {isHovered && (
        <>
          <line x1={x1} y1={y1} x2={x1} y2={y2} stroke='red'/>
          <line x1={x2} y1={y1} x2={x2} y2={y2} stroke='red'/>
          <line x1={x1} y1={y1} x2={x2} y2={y1} stroke='red'/>
          <line x1={x1} y1={y2} x2={x2} y2={y2} stroke='red'/>
        </>
      )}
      <text
        x={x1 + 5}
        y={y1 + 5}
        fontSize="15"
        textAnchor="middle"
        fill={isHovered ? 'lightblue' : 'black'}
      >
        {symbol}
      </text>
    </g>
  )
}
