import React from 'react'
import  {Link, useParams , useHistory , Redirect} from 'react-router-dom';

export default function Product() {
    const { id } = useParams();
    const history = useHistory();
    const gotoAboutPage = () => {
        history.push('/about');
    }
    if(id == 3){
        return <Redirect to='/'/>         
    }
    return (
        <div>
            <h1>Product</h1>
            {
                id? 
                (<div>
                    <h4>Product Id : {id}</h4>
                </div>
                )
                :(
                    <div>
                        <ul>
                            <li>
                                <Link to='/product/1'>Product 1</Link>
                            </li>
                            <li>
                                <Link to='/product/2'>Product 2</Link>
                            </li>
                            <li>
                                <Link to='/product/3'>Product 3</Link>
                            </li>
                            <li>
                                <button onClick={gotoAboutPage}>About Goto</button>
                            </li>
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
