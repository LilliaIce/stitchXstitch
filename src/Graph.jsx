import { useState } from 'react'
import './App.css'
import Cell from './Cell.jsx'

export default function Graph({numRows, numColumns}) {
  let xList = []
  let yList = []
  for (let i = 1; i <= numRows; i++) {
    for (let j = 1; j <= numColumns; j++) {
      xList.push(i*10)
      yList.push(j*10)
    }
  }
  console.log(xList)
  console.log(yList)
  return (
    <>
      {xList.map((x, i) => (
        <Cell x={x} y={yList[i]} key={x.toString() + "," + i.toString()}/>
      ))}
    </>
  )
}
