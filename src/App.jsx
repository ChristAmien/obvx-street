import { useState } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { About } from "./components/About"
import { FeaturedCollection } from "./components/FeaturedCollection"
import { CollectionsPage } from "./components/CollectionsPage"
import { CartPage } from "./components/CartPage"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"

export const App = () => {
  const [cart, setCart] = useState([])
  const location = useLocation()
  const isAuthPage = location.pathname === "/login" || location.pathname === "/register"

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product])
  }

  return (
    <div className={`min-h-screen bg-[#FFF8F0] ${isAuthPage ? "" : "pt-20 sm:pt-24"}`}>
      {!isAuthPage && <Navbar cartCount={cart.length} />}
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
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/collections"
          element={<CollectionsPage onAddToCart={addToCart} />}
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
      </Routes>
    </div>
  )
}