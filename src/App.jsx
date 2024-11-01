import React from 'react'
import './App.scss'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Catalog from './components/Catalog.jsx/Catalog'
import Catalog1 from './components/Catalog1/Catalog1'

const App = () => {
  return (
   <>
    <Header/>
    <Hero/>
    <Catalog/>
    <Catalog1/>
   </>
  )
}

export default App