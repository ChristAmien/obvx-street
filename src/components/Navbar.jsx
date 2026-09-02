import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo/logoBlack.png"
import ShopDropdown from "./ShopDropdown"
import { Search, ShoppingBag, UserRound, Menu, X } from "lucide-react"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <section className="border-b border-black/10 bg-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <nav
          className="flex min-h-20 items-center justify-between gap-4 py-4 sm:min-h-24"
          aria-label="Navigation principale"
        >
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <img
              src={logo}
              alt="OBVX"
              width={120}
              height={120}
              className="h-auto w-[80px] object-contain sm:w-[120px]"
            />
          </Link>

          <ul className="hidden font-montserrat text-sm font-semibold uppercase tracking-wide sm:flex sm:items-center sm:gap-8">
            <li>
              <Link to="/" className="transition-colors hover:text-amber-700">
                Accueil
              </Link>
            </li>
            <li>
              <ShopDropdown />
            </li>
            <li>
              <Link to="/collections" className="transition-colors hover:text-amber-700">
                Collections
              </Link>
            </li>
            <li>
              <a href="#apropos" className="transition-colors hover:text-amber-700">
                À propos
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="transition-colors hover:text-amber-700"
              aria-label="Rechercher"
              title="Rechercher"
            >
              <Search size={21} strokeWidth={1.8} aria-hidden="true" />
            </button>

            <Link
              className="hidden transition-colors hover:text-amber-700 sm:block"
              to="/account"
              aria-label="Mon compte"
              title="Mon compte"
            >
              <UserRound size={21} strokeWidth={1.8} aria-hidden="true" />
            </Link>

            <Link
              className="transition-colors hover:text-amber-700"
              to="/cart"
              aria-label="Panier"
              title="Panier"
            >
              <ShoppingBag size={21} strokeWidth={1.8} aria-hidden="true" />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="transition-colors hover:text-amber-700 sm:hidden"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X size={24} strokeWidth={1.8} aria-hidden="true" />
              ) : (
                <Menu size={24} strokeWidth={1.8} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out sm:hidden ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-1 border-t border-black/10 py-4 font-montserrat text-sm font-semibold uppercase tracking-wide">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block px-2 py-3 transition-colors hover:text-amber-700"
              >
                Accueil
              </Link>
            </li>
            <li className="px-2">
              <ShopDropdown />
            </li>
            <li>
              <Link
                to="/collections"
                onClick={closeMenu}
                className="block px-2 py-3 transition-colors hover:text-amber-700"
              >
                Collections
              </Link>
            </li>
            <li>
              <a
                href="#apropos"
                onClick={closeMenu}
                className="block px-2 py-3 transition-colors hover:text-amber-700"
              >
                À propos
              </a>
            </li>
            <li>
              <Link
                to="/account"
                onClick={closeMenu}
                className="block px-2 py-3 transition-colors hover:text-amber-700"
              >
                Mon compte
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}