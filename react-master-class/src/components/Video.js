import React from 'react'

export default function Video({title,flag}) {
  return (
    <>
        <div>{title} {flag && 'hello flagger'}</div>
    </>
  )
}
