import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Eye, EyeOff, LockKeyhole, Mail, UserRound } from "lucide-react";
import { register } from "../../services/Authservices";

function Register() {

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setSuccess("");
        setLoading(true);

        try {

            await register(
                form.firstName,
                form.lastName,
                form.email,
                form.password
            );

            setSuccess("Compte créé avec succès !");

            setForm({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="px-4 py-12 sm:px-8 sm:py-20">
            <div className="mx-auto grid max-w-5xl overflow-hidden border border-black/10 bg-white shadow-[10px_10px_0_#f1dfb5] lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-7 sm:p-12">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Nouveau membre</span>
                    <h1 className="mt-3 text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">Créer un compte</h1>
                    <p className="mt-4 text-sm leading-relaxed text-black/60">Déjà membre ?{" "}<Link to="/login" className="font-semibold text-black underline decoration-amber-500 underline-offset-4 hover:text-amber-700">Connectez-vous</Link></p>

                    <form onSubmit={handleSubmit} className="mt-9 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                            {[{ name: "firstName", label: "Prénom", placeholder: "Votre prénom", autoComplete: "given-name" }, { name: "lastName", label: "Nom", placeholder: "Votre nom", autoComplete: "family-name" }].map((field) => (
                                <div key={field.name}>
                                    <label htmlFor={`register-${field.name}`} className="mb-2 block text-xs font-semibold uppercase tracking-wider">{field.label}</label>
                                    <div className="relative">
                                        <UserRound size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/40" aria-hidden="true" />
                                        <input id={`register-${field.name}`} type="text" name={field.name} value={form[field.name]} onChange={handleChange} placeholder={field.placeholder} autoComplete={field.autoComplete} className="w-full border border-black/15 bg-[#FFF8F0] py-3.5 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-amber-600" required />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <label htmlFor="register-email" className="mb-2 block text-xs font-semibold uppercase tracking-wider">Email</label>
                            <div className="relative">
                                <Mail size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/40" aria-hidden="true" />
                                <input id="register-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="vous@exemple.com" autoComplete="email" className="w-full border border-black/15 bg-[#FFF8F0] py-3.5 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-amber-600" required />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="register-password" className="mb-2 block text-xs font-semibold uppercase tracking-wider">Mot de passe</label>
                            <div className="relative">
                                <LockKeyhole size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black/40" aria-hidden="true" />
                                <input id="register-password" type={showPassword ? "text" : "password"} name="password" value={form.password} onChange={handleChange} placeholder="8 caractères minimum" autoComplete="new-password" minLength={8} className="w-full border border-black/15 bg-[#FFF8F0] py-3.5 pl-11 pr-12 text-sm outline-none transition-colors placeholder:text-black/35 focus:border-amber-600" required />
                                <button type="button" onClick={() => setShowPassword((visible) => !visible)} className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-black/45 hover:text-black" aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}>{showPassword ? <EyeOff size={17} aria-hidden="true" /> : <Eye size={17} aria-hidden="true" />}</button>
                            </div>
                        </div>

                        <p className="flex items-start gap-2 text-xs leading-relaxed text-black/50"><Check size={15} className="mt-0.5 shrink-0 text-amber-700" aria-hidden="true" /> Un mot de passe de 8 caractères minimum est recommandé.</p>
                        {error && <p role="alert" className="border-l-2 border-red-600 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p>}
                        {success && <p role="status" className="border-l-2 border-green-600 bg-green-50 px-3 py-2 text-sm text-green-700">{success}</p>}
                        <button type="submit" disabled={loading} className="flex w-full items-center justify-center gap-2 bg-black px-5 py-4 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-60">{loading ? "Création..." : "Créer mon compte"}{!loading && <ArrowRight size={17} aria-hidden="true" />}</button>
                    </form>
                </div>

                <div className="flex min-h-56 flex-col justify-between bg-amber-100 p-7 sm:p-10 lg:min-h-[560px]">
                    <span className="font-bebas text-4xl tracking-wide">OBVX</span>
                    <div>
                        <p className="max-w-xs font-bebas text-5xl uppercase leading-[0.9] tracking-wide sm:text-6xl">Votre style. Votre terrain.</p>
                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-black/60">Un compte pour suivre vos commandes et ne rien manquer des prochaines collections.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Register;