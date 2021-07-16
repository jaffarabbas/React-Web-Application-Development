function NumberList(props) {
    return (
        <ul>
            {props.numbers.map((number, index) => <li key={index}>{number}</li>)}
        </ul>
    )
}

export default NumberList;