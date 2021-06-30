import React from 'react';

const newList = (props) => {
    return (
        <div>
            <form>
                <input id="newList" type="text" placeholder="New List"/>
                <button onClick={props.insert} className="btn btn-primary mt-1 ml-2">Add</button>   
            </form>
        </div>
    )
}

export default newList