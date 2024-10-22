import { useState } from 'react'
import SignUp from './Components/auth/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/auth/Login'
import Header from './Components/Header/Header'
import Recipes from './Components/Recipes/Recipes'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/AboutUs/AboutUs'
import AddRecipe from './Components/AddRecipes/AddRecipe'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
        <Route path='/addRecipes' element={<AddRecipe/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/aboutUs' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
