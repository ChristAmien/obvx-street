import teeFront from "../assets/image/catalogues/catalogue-03.jpg"

export const Home = () => {
    return (
        <section id="accueil" className="border-b border-black/10">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
                <div>
                    <h1 className="mt-4 text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl">
                        La rue comme
                        <br />
                        point de départ
                    </h1>
                    <p className="mt-6 max-w-md text-base leading-relaxed text-black/70">
                        OBVX est né dans la rue, pensé pour la rue. Pour ceux qui veulent porter une identité forte, sans avoir à la justifier. Une première collection
                        construite autour d&apos;une seule idée&nbsp;: habiller sa culture avec élégance,
                        sans compromis.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-5">
                        <a
                            href="/shop"
                            className="border border-black bg-black px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-amber-700 hover:bg-amber-700"
                        >
                            Voir la collection
                        </a>
                        <a
                            href="/about"
                            className="text-sm font-semibold uppercase tracking-wide underline decoration-black/30 underline-offset-4 hover:text-amber-700"
                        >
                            Notre histoire
                        </a>
                    </div>
                </div>

                <div className="border border-black/10 bg-white">
                    <img
                        src={teeFront}
                        alt="T-shirt OBVX noir avec logo globe brodé sur le devant"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}