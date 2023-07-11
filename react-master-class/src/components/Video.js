import React from 'react'
import CLickButton from './Button'

export default function Video({title,flag}) {
  return (
    <>
        <div>{title} {flag && 'hello flagger'}</div>
        <CLickButton message="Hello" onClick={()=>console.log('hellll')}>Click</CLickButton>
    </>
  )
}
