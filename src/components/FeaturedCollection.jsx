import { Link } from "react-router-dom"
import { PRODUCTS } from "../constant/data"

const formatPrice = (price) =>
    new Intl.NumberFormat("fr-FR").format(price) + " FCFA"

export const FeaturedCollection = ({ onAddToCart }) => {
    return (
        <section id="collections" className="border-b border-black/10 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
                <div className="mb-12 flex flex-col items-start gap-3 sm:mb-16">
                    <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                        Collection
                    </span>
                    <h2 className="text-3xl font-bold uppercase leading-[0.95] tracking-tight sm:text-4xl">
                        Nos produits
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
                    {PRODUCTS.slice(0, 8).map((product) => (
                        <a key={product.id}
                            href={`/shop/${product.id}`}
                            className="group block"
                        >
                            <div className="relative overflow-hidden border border-black/10 bg-[#FFF8F0]">
                                {product.isNew && (
                                    <span className="absolute left-3 top-3 z-10 bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                                        Nouveau
                                    </span>
                                )}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="mt-3 space-y-1">
                                <p className="text-[11px] uppercase tracking-wide text-black/50">
                                    {product.category}
                                </p>
                                <h3 className="font-montserrat text-sm font-semibold uppercase tracking-wide transition-colors group-hover:text-amber-700">
                                    {product.name}
                                </h3>
                                <p className="text-sm text-black/70">{formatPrice(product.price)}</p>
                                <button
                                    type="button"
                                    onClick={(event) => {
                                        event.preventDefault()
                                        onAddToCart(product)
                                    }}
                                    className="mt-2 w-full border border-black bg-black px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-white transition-colors hover:border-amber-700 hover:bg-amber-700"
                                >
                                    Ajouter au panier
                                </button>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="mt-14 flex justify-center">
                    <Link
                        to="/collections"
                        className="border border-black px-8 py-3 text-sm font-semibold uppercase tracking-wide transition-colors hover:border-amber-700 hover:bg-amber-700 hover:text-white"
                    >
                        Voir plus
                    </Link>
                </div>
            </div>
        </section>
    )
}