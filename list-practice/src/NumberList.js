function NumberList(props) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <ul>
            {numbers.map((number, index) => <li key={index}>{number}</li>)}
        </ul>
    )
}

export default NumberList;