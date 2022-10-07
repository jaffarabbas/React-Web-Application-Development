import React from 'react'
import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/data';

function App() {
  const { products } = data;
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <div className='row mt-3'>
          <div className='col-lg-8 col-md-8 col-sm-12'>
            <Main products={products} />
          </div>
          <div className='col-md-4 col-sm-12'>
            <Basket />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
