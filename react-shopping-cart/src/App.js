import React, { useDeferredValue, useEffect, useState, useTransition } from 'react'
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data';
import { getLocalData, setInLocal } from './services/localStorage';

function App() {
  const [cart, setCart] = useState([]);
  const { products } = data;
  const onAddProduct = (product) => {
    const checkProduct = cart.find((x) => x._id === product._id);
    if (checkProduct) {
      const newItem = cart.map((item) => item._id === product._id ? { ...checkProduct, qty: checkProduct.qty + 1 } : item);
      setCart(newItem);
      setInLocal('cart', newItem);
    } else {
      const newCartItem = [...cart, { ...product, qty: 1 }];
      setCart(newCartItem);
      setInLocal('cart', newCartItem);
    }
  }
  const onRemoveProduct = (product) => {
    const checkProduct = cart.find((x) => x._id === product._id);
    if (checkProduct.qty === 1) {
      const newItem = cart.filter((item) => item._id !== product._id);
      setCart(newItem);
      setInLocal('cart', newItem);
    } else {
      const newItem = cart.map((item) => item._id === product._id ? { ...checkProduct, qty: checkProduct.qty - 1 } : item);
      setCart(newItem);
      setInLocal('cart', newItem);
    }
  }
  const [isPending,startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      setCart(getLocalData('cart') ? JSON.parse(getLocalData('cart')) : []);
    });
  }, []);

  const cartItemCount = useDeferredValue(cart.length);
  
  return isPending ? <div><h1 className='text-center'>Loading</h1></div> : (
    <div className="App">
      <Header cartCounter={cartItemCount} />
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-7 col-md-8 col-sm-12'>
            <Main
              onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
              cart={cart}
              products={products} />
          </div>
          <div className='col-md-5 col-sm-12'>
            <Basket onAddProduct={onAddProduct}
              onRemoveProduct={onRemoveProduct}
              cart={cart}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
