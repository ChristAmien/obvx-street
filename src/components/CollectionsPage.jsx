import { useState, useMemo } from "react"
import { PRODUCTS } from "../constant/data"

const formatPrice = (price) =>
  new Intl.NumberFormat("fr-FR").format(price) + " FCFA"

const CATEGORIES = ["Tous", "Vêtements", "Accessoires"]

export const CollectionsPage = () => {
  const [activeCategory, setActiveCategory] = useState("Tous")

  const filteredProducts = useMemo(() => {
    if (activeCategory === "Tous") return PRODUCTS
    return PRODUCTS.filter((product) => product.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-8 lg:py-24">
        <div className="mb-10 flex flex-col items-start gap-3 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Boutique
          </span>
          <h1 className="text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Toute la collection
          </h1>
          <p className="max-w-md text-sm text-black/60">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""}
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3 border-b border-black/10 pb-6 sm:mb-14">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`border px-5 py-2 text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                activeCategory === category
                  ? "border-black bg-black text-white"
                  : "border-black/20 hover:border-amber-700 hover:text-amber-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <p className="py-16 text-center text-sm text-black/50">
            Aucun produit dans cette catégorie pour le moment.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <a
                key={product.id}
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
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}