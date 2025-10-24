import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './router/Home'
import Contact from './router/Contact'
import About from './router/About'
import SingUp from './router/SingUp'
import Wishlist from './router/Wishlist'
import Contoct from './router/Contoct'
import Trolley from './router/Trolley'
import CartPage from './router/CartPage'
import ProductDetails from './router/ProductDetails'





function App() {
  
  return (
    <div>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='Contact' element={<Contact/>}/>
       <Route path='About' element={<About/>}/>
       <Route path='SignUp' element={<SingUp/>}/>
       <Route path='/Wishlist' element={<Wishlist/>}/>
       <Route path='/Contoct' element={<Contoct/>}/>
       <Route path='/Trolley' element={<Trolley/>}/>
       <Route path='/Details' element={<ProductDetails/>}/>
       <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </div>
  )
}

export default App;