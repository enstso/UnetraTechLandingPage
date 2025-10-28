'use client';

// Heroicons: pas de CookieIcon, donc on prend ShieldCheckIcon ou un emoji !
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Cookies() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
            <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-2xl border border-blue-100 p-8">
                <div className="flex items-center gap-3 mb-4">
                    {/* <- Remplace ici l'icône  */}
                    {/* <ShieldCheckIcon className="w-8 h-8 text-yellow-500" /> */}
                    <span className="text-2xl">🍪</span>

                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
                        Gestion des cookies
                    </h1>
                </div>
                <div className="text-gray-700 space-y-6 text-[15px]">
                    <div>
                        Le site Unetra Tech n’utilise que des cookies techniques strictement nécessaires à son fonctionnement (navigation, sécurité, préférences). Les cookies de mesure d’audience sont anonymes.
                    </div>
                    <div>
                        <span className="font-semibold">Accepter ou refuser :</span> <br />
                        Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies, cependant cela peut altérer l’expérience utilisateur.
                    </div>
                    <div>
                        Plus d’informations sur les cookies sur le site officiel de la CNIL :{" "}
                        <a
                            href="https://www.cnil.fr/fr/cookies-traceurs-que-dit-la-loi"
                            className="text-blue-600 underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            www.cnil.fr
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
