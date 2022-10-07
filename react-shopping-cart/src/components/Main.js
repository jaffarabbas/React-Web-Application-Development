import React from 'react'
import Products from './Products';

const Main = (props) => {
  const { products } = props;
  return (
    <div className='card'>
      <div className='card-header'>Products</div>
      <div className='card-body'>
        <div className='row'>
          {products.map((product) => (
            <Products key={product._id} product={product}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main