const setInLocal = (key,value) => {
    return localStorage.setItem(key,JSON.stringify(value));
}

const getLocalData = (key) =>{
    return localStorage.getItem(key);
}

export {setInLocal,getLocalData};