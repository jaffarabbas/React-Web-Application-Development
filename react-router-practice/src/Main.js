import React from 'react'
import {BrowserRouter, Link , Switch , Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Product from './Pages/Product';

export default function Main() {
    return (
        <BrowserRouter>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/product'>Product</Link>
            </div>
            <div>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/product/:id">
                        <Product/>
                    </Route>
                    <Route path="/product">
                        <Product/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
