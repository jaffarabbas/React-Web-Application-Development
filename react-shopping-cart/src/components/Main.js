import React from 'react'
import Products from './Products';

const Main = (props) => {
  const { products,cart, onAddProduct, onRemoveProduct } = props;
  return (
    <div className='card'>
      <div className='card-header'>Products</div>
      <div className='card-body'>
        <div className='row'>
          {products.map((product) => (
            <Products
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
              cart={cart.find((x) => x._id === product._id)}
              key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main