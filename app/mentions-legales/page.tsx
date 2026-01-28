'use client';

import { ShieldCheckIcon, BuildingOffice2Icon } from '@heroicons/react/24/outline';

export default function MentionsLegales() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
            <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-2xl border border-blue-100 p-8">
                <div className="flex items-center gap-3 mb-4">
                    <BuildingOffice2Icon className="w-8 h-8 text-blue-500" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Mentions légales</h1>
                </div>
                <div className="text-gray-700 space-y-6 text-[15px]">
                    <div>
                        <span className="font-semibold">Éditeur du site :</span> Unetra Tech
                        <br />
                        <span className="font-semibold">Contact :</span> <a href="mailto:contact@unetratech.com" className="text-blue-600 underline">contact@unetratech.com</a>, +33 6 46 57 46 36
                    </div>
                    <div>
                        <span className="font-semibold">Responsable publication :</span> Enstso Janvier et Diallo Amadou
                    </div>

                    <div>
                        <span className="font-semibold">Propriété intellectuelle :</span>
                        <br />
                        L’ensemble de ce site relève de la législation française sur le droit d’auteur et la propriété intellectuelle. Toute reproduction totale ou partielle du contenu ou du design est interdite sans accord écrit préalable.
                    </div>
                    <div>
                        <span className="font-semibold">Responsabilité :</span>
                        <br />
                        Unetra Tech ne peut être tenue responsable des dommages directs ou indirects consécutifs à l'accès ou à l'utilisation du site et des informations qui y figurent.
                    </div>
                </div>
            </div>
        </section>
    );
}
