import React from 'react'
import Button from './Button'

export default function Video({title,flag}) {
  return (
    <>
        <div>{title} {flag && 'hello flagger'}</div>
        <Button message="Hello">Click</Button>
    </>
  )
}
