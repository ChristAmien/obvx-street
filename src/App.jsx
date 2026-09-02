import { Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { FeaturedCollection } from "./components/FeaturedCollection"
import { CollectionsPage } from "./components/CollectionsPage"

export const App = () => {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <FeaturedCollection />
            </>
          }
        />
        <Route path="/collections" element={<CollectionsPage />} />
      </Routes>
    </div>
  )
}