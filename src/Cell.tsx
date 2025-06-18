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
      onMouseDown={(e) => onMouseDown(e)}
      onMouseUp={(e) => onMouseUp(e)}
      onMouseMove={(e) => onMouseMove(e)}
    >
      <rect
        x={x1}
        y={y1}
        width={10}
        height={10}
        fill={isSelected ? 'blue' : color}
      />
      <line x1={x1} y1={y1} x2={x1} y2={y2} stroke={isHovered ? 'darkblue' : 'black'} />
      <line x1={x2} y1={y1} x2={x2} y2={y2} stroke={isHovered ? 'darkblue' : 'black'} />
      <line x1={x1} y1={y1} x2={x2} y2={y1} stroke={isHovered ? 'darkblue' : 'black'} />
      <line x1={x1} y1={y2} x2={x2} y2={y2} stroke={isHovered ? 'darkblue' : 'black'} />
      <text
        x={x1 + 5}
        y={y1 + 5}
        fontSize="15"
        textAnchor="middle"
        fill={isHovered ? 'darkblue' : 'black'}
      >
        {symbol}
      </text>
    </g>
  )
}
