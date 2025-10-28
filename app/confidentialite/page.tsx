'use client';

import { ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function Confidentialite() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16">
            <div className="max-w-2xl mx-auto bg-white/90 rounded-2xl shadow-2xl border border-blue-100 p-8">
                <div className="flex items-center gap-3 mb-4">
                    <ShieldCheckIcon className="w-8 h-8 text-indigo-500" />
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">Politique de Confidentialité</h1>
                </div>
                <div className="text-gray-700 space-y-6 text-[15px]">
                    <div>
                        Nous respectons votre vie privée. Les informations recueillies via les formulaires sont strictement destinées à la gestion de vos demandes et ne sont jamais partagées avec des tiers à des fins commerciales.
                    </div>
                    <div>
                        <span className="font-semibold">Droits des utilisateurs :</span><br />
                        Conformément à la réglementation RGPD, vous pouvez exercer votre droit d'accès, de modification ou de suppression en nous écrivant à <a href="mailto:contact@unetratech.com" className="text-blue-600 underline">contact@unetratech.com</a>.
                    </div>
                    <div>
                        <span className="font-semibold">Conservation des données :</span><br />
                        Vos données sont conservées seulement le temps strictement nécessaire au traitement de votre demande ou au suivi de votre projet. Aucune donnée sensible n’est stockée sans votre consentement.
                    </div>
                    <div>
                        Pour en savoir plus, visitez <a href="https://www.cnil.fr" className="text-blue-600 underline" target="_blank">www.cnil.fr</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
