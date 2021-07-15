import React from 'react'
import {BrowserRouter, NavLink , Switch , Route} from 'react-router-dom';
import About from './Pages/About';
import Home from './Pages/Home';
import Product from './Pages/Product';

export default function Main() {
    return (
        <BrowserRouter>
            <div>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/product'>Product</NavLink>
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
