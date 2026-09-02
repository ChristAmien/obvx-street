import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ShopDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 text-xs font-medium uppercase tracking-wider sm:text-sm"
            >
                Boutique
                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <div className="absolute left-1/2 top-full z-50 mt-3 w-56 -translate-x-1/2 rounded-lg border border-black/10 bg-[#FFF8F0] p-2 shadow-lg sm:left-0 sm:translate-x-0">
                    <a href="/shop" className="block rounded-md px-4 py-3 text-sm hover:bg-black/5">
                        Tous les produits
                    </a>

                    <a href="/shop/new" className="block rounded-md px-4 py-3 text-sm hover:bg-black/5">
                        Nouveautés
                    </a>

                    <a href="/shop/clothing" className="block rounded-md px-4 py-3 text-sm hover:bg-black/5">
                        Vêtements
                    </a>

                    <a href="/shop/accessories" className="block rounded-md px-4 py-3 text-sm hover:bg-black/5">
                        Accessoires
                    </a>

                    <a href="/shop/sale" className="block rounded-md px-4 py-3 text-sm text-orange-600 hover:bg-black/5">
                        Soldes
                    </a>
                </div>
            )}
        </div>
    );
}