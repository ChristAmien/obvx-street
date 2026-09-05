const formatPrice = (price) =>
  new Intl.NumberFormat("fr-FR").format(price) + " FCFA"

export const CartPage = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0)

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-8 lg:py-24">
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-700">
            Votre sélection
          </span>
          <h1 className="mt-3 text-4xl font-bold uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Panier
          </h1>
        </div>

        {cart.length === 0 ? (
          <p className="border-t border-black/10 py-10 text-sm text-black/60">
            Votre panier est vide.
          </p>
        ) : (
          <>
            <div className="border-y border-black/10">
              {cart.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="flex items-center gap-4 border-b border-black/10 py-4 last:border-b-0"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-20 object-cover"
                  />
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-wide text-black/50">
                      {product.category}
                    </p>
                    <h2 className="mt-1 text-sm font-semibold uppercase tracking-wide">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-sm text-black/70">{formatPrice(product.price)}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-start gap-5 sm:items-end">
              <p className="text-lg font-semibold uppercase">
                Total : {formatPrice(total)}
              </p>
              <button
                type="button"
                className="border border-black bg-black px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-amber-700 hover:bg-amber-700"
              >
                Commander
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}