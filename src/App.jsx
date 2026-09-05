import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { FeaturedCollection } from "./components/FeaturedCollection"
import { CollectionsPage } from "./components/CollectionsPage"
import { CartPage } from "./components/CartPage"

export const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product])
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0] pt-20 sm:pt-24">
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <FeaturedCollection onAddToCart={addToCart} />
            </>
          }
        />
        <Route
          path="/collections"
          element={<CollectionsPage onAddToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </div>
  )
}