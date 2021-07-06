function todo(props) {
    return (
        <ul>
            {props.todo.map((todo) => (
                <li key={todo.id}>
                    {todo.task} - {todo.status ? 'Done' : ''}
                </li>
            ))}
        </ul>
    )
}
export default todo;