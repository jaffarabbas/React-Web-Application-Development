import React from 'react'

const Products = (props) => {
    const { product, cart, onAddProduct, onRemoveProduct } = props;
    return (
        <div className='col-lg-4 col-md-1 col-sm-1 mt-2' key={product.id}>
            <div className='card h-100'>
                <img src={product.image} alt={product.title} className='card-img-top' height={200} width={100} />
                <div className='card-body'>
                    <h5 className='card-title'>{product.title}</h5>
                    <p className='card-text'>${product.price}</p>
                </div>
                <div className='card-footer'>
                    {
                        cart ? <div>
                            <button className='btn btn-danger' onClick={() => onRemoveProduct(product)}>-</button>
                            <span className='p-2'>{cart.qty}</span>
                            <button className='btn btn-success' onClick={() => onAddProduct(product)}>+</button>
                        </div> : <div>
                            <button onClick={() => onAddProduct(product)} className='btn btn-primary'>Add to cart</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products