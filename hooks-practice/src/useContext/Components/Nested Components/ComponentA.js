import React from 'react'
import { ThemeContextProvider } from '../ThemeContext'
import ComponentB from './ComponentB'

export default function ComponentA() {
    return (
        <div>
            <ThemeContextProvider></ThemeContextProvider>
        </div>
    )
}
