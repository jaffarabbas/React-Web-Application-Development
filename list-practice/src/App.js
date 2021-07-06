import React, { Component } from 'react'
import NumberList from './NumberList'

export default class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const numbers2 = [1, 2, 33, 43, 54, 65, 7, 8, 9]
    const todo = [
      { id: 1, task: 'Jaffar', status: false },
      { id: 2, task: 'works', status: true }
    ]
    return (
      <div>
        <NumberList numbers={numbers} />
        <NumberList numbers={numbers2} />
        <ul>
          {todo.map((todo)=>(
            <li key={todo.id}>
                {todo.task} - {todo.status?'Done':''}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
