import { useState } from 'react'
import './App.css'

export default function Cell({x = 10, y = 10}) {
  const [color, setColor] = useState('orange')
  const [symbol, setSymbol] = useState('')
  const [xPos, setxPos] = useState(x)
  const [yPos, setyPos] = useState(y)
  let xPos2 = xPos + 10;
  let yPos2 = yPos + 10;
  let x1 = xPos.toString() + "%";
  let y1 = yPos.toString() + "%";
  let x2 = xPos2.toString() + "%";
  let y2 = yPos2.toString() + "%";

  return (
    <>
        <rect x={x1} y={y1} width="10%" height="10%" fill={color} />
        <line x1={x1} y1={y1} x2={x2} y2={y1} stroke="black" />
        <line x1={x1} y1={y2} x2={x2} y2={y2} stroke="black" />
        <line x1={x1} y1={y1} x2={x1} y2={y2} stroke="black" />
        <line x1={x2} y1={y1} x2={x2} y2={y2} stroke="black" />
        <text x={x1} y={y1} fontSize="15" textAnchor="middle" 
        fill="black">{symbol}</text>
    </>
  )
}
