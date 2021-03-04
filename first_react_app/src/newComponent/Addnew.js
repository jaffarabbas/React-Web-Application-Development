import React from 'react';
import './Appnew.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const addition = (props) => {
    return (
        <div className="po">
             <div className="container">
                 <div className="row">
                    <div className="col-4 col-sm-4 col-md-4">
                     <h4 onClick={props.click}> {props.name}</h4>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                     <input id="form_id" onChange={props.change} value={props.name} className="form-control"  type="text" />
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                     <button onClick={props.delete} className="btn btn-primary mt-1 ml-2">delete</button>    
                    </div>
                 </div>
             </div>
        </div>
    )
}
export default addition;