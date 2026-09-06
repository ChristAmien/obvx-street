import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { login } from "../../services/Authservices";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const user = await login(email, password);

            console.log("Utilisateur connecté :", user);

            // Pour l'instant
            alert(`Bienvenue ${user.firstName} !`);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="px-4 py-12 sm:px-8 sm:py-20">
            <div className="mx-auto grid max-w-5xl overflow-hidden border border-black/10 bg-white shadow-[10px_10px_0_#f1dfb5] lg:grid-cols-[0.85fr_1.15fr]">
                <div className="flex min-h-56 flex-col justify-between bg-black p-7 text-white sm:p-10 lg:min-h-[560px]">
                    <div>
                        <span className="font-bebas text-4xl tracking-wide text-amber-200">OBVX</span>
                        <p className="mt-12 max-w-xs font-bebas text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl">Entrez dans le mouvement.</p>
                    </div>
                    <p className="mt-8 max-w-xs text-sm leading-relaxed text-white/60">Retrouvez vos commandes et vos pièces favorites en un seul endroit.</p>
                </div>

                <div className="p-7 sm:p-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Espace membre</span>
                    <h1 className="mt-3 text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">Connexion</h1>
                    <p className="mt-4 text-sm leading-relaxed text-black/60">Pas encore de compte ?{" "}<Link to="/register" className="font-semibold text-black underline decoration-amber-500 underline-offset-4 hover:text-amber-700">Créez-en un</Link></p>

                    <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                        <div>
                            <label htmlFor="login-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider">Email</label>
                            <div className="relative">
                                <Mail size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/40" aria-hidden="true" />
                                <input id="login-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@exemple.com" autoComplete="email" className="w-full border border-black/15 bg-[#FFF8F0] py-3.5 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-amber-600" required />
                            </div>
                        </div>

                        <div>
                            <div className="mb-2 flex items-center justify-between">
                                <label htmlFor="login-password" className="text-xs font-semibold uppercase tracking-wider">Mot de passe</label>
                                <button type="button" className="text-xs font-medium text-black/50 hover:text-amber-700">Mot de passe oublié ?</button>
                            </div>
                            <div className="relative">
                                <LockKeyhole size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/40" aria-hidden="true" />
                                <input id="login-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Votre mot de passe" autoComplete="current-password" className="w-full border border-black/15 bg-[#FFF8F0] py-3.5 pl-11 pr-12 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-amber-600" required />
                                <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-black/45 hover:text-black" aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>{showPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}</button>
                            </div>
                        </div>

                        {error && <p role="alert" className="border-l-2 border-red-600 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
                        <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 bg-black px-5 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Connexion..." : "Se connecter"}{!loading && <ArrowRight size={17} aria-hidden="true" />}</button>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Login;