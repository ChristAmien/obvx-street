import { Link } from "react-router-dom"
import logo from "../assets/logo/logoBlack.png"
import ShopDropdown from "./ShopDropdown"
import { Search, ShoppingBag, UserRound } from "lucide-react"

export const Navbar = () => {
  return (
    <section className="border-b border-black/10 bg-amber-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <nav
          className="flex min-h-24 flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:gap-6"
          aria-label="Navigation principale"
        >
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="OBVX"
              width={120}
              height={120}
              className="h-auto w-[90px] object-contain sm:w-[120px]"
            />
          </Link>

          <ul className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 font-montserrat text-xs font-semibold uppercase tracking-wide sm:w-auto sm:justify-end sm:gap-x-8 sm:text-sm">
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

          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <button
              type="button"
              className="transition-colors hover:text-amber-700"
              aria-label="Rechercher"
              title="Rechercher"
            >
              <Search size={21} strokeWidth={1.8} aria-hidden="true" />
            </button>

            <Link
              className="transition-colors hover:text-amber-700"
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
          </div>
        </nav>
      </div>
    </section>
  )
}