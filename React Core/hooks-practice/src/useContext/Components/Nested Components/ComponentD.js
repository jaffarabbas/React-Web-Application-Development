import React from 'react'
import { ThemeContextConsumer } from '../ThemeContext'

export default function ComponentD() {
    return (
        <div>
            <ThemeContextConsumer>
                {(context) => (
                    <div>
                        {context.theme}
                        <button onClick={context.toggleTheme}>Toggle button</button>
                    </div>
                )}
            </ThemeContextConsumer>
        </div>
    )
}
