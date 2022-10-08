import React from 'react'

const Basket = (props) => {
  const { cart, onAddProduct, onRemoveProduct } = props;
  const itemPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemPrice * 0.14;
  const shippingPrice = itemPrice > 2000 ? 0 : 50;
  const totalPrice = itemPrice + taxPrice + shippingPrice;
  return (
    <div className='card'>
      <div className='card-header'>Cart</div>
      {
        cart.length !== 0 ? <div className='card-body'>
          {
            cart.map(item => (
              <div key={item._id} className='row border-bottom p-2'>
                <div className='col-md-4'>{item.title}</div>
                <div className='col-md-4'>
                  <button className='btn btn-danger' onClick={() => onRemoveProduct(item)}>-</button>
                  <span className='p-2'>{item.qty}</span>
                  <button className='btn btn-success' onClick={() => onAddProduct(item)}>+</button>
                </div>
                <div className='col-md-4'>{item.qty} x {item.price} Rs</div>
              </div>
            ))
          }
        </div> : <div className='card-body'>Cart is empty</div>
      }
      {
        cart.length !== 0 && <div className='card-footer'>
          <div className='row row border-bottom p-1'>
            <div className='col-md-8'>Items Price</div>
            <div className='col-md-4'>{itemPrice.toFixed(2) + ' Rs'}</div>
          </div>
          <div className='row row border-bottom p-1'>
            <div className='col-md-8'>Tax Price</div>
            <div className='col-md-4'>{taxPrice.toFixed(2) + ' Rs'}</div>
          </div>
          <div className='row row border-bottom p-1'>
            <div className='col-md-8'>Shipping Price</div>
            <div className='col-md-4'>{shippingPrice === 0 ? 'Free' : shippingPrice + ' Rs'}</div>
          </div>
          <div className='row row border-bottom p-1'>
            <div className='col-md-8'><b>Total Price</b></div>
            <div className='col-md-4'><b>{totalPrice.toFixed(2) + ' Rs'}</b></div>
          </div>
          <div className='row row border-bottom pt-2'>
            <button className='btn btn-primary'>Checkout</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Basket