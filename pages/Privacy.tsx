import React from 'react';

export const Privacy: React.FC = () => {
    return (
        <div className="bg-background text-white">
            {/* HERO SECTION */}
            <div className="relative h-[40vh] min-h-[300px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-24">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1920&auto=format&fit=crop&fm=webp"
                    alt="Politique de Confidentialité"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/80"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4 text-white">
                        Politique de Confidentialité
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl py-24">

                <div className="space-y-12 text-textMuted leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">1. Données collectées</h2>
                        <p>
                            Dans le cadre de votre navigation sur notre site, nous pouvons être amenés à collecter certaines données personnelles vous concernant, notamment via le formulaire de contact (nom, email, téléphone, message).
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">2. Finalité du traitement</h2>
                        <p>
                            Ces données sont utilisées exclusivement pour :
                        </p>
                        <ul className="mt-4 space-y-2 list-disc pl-6">
                            <li>Répondre à vos demandes de renseignements.</li>
                            <li>Établir des devis personnalisés.</li>
                            <li>Gérer notre relation commerciale.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">3. Durée de conservation</h2>
                        <p>
                            Vos données personnelles sont conservées pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles sont collectées et traitées, conformément aux recommandations de la CNIL et du RGPD.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">4. Cookies</h2>
                        <p>
                            La navigation sur le site est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site.
                        </p>
                        <p className="mt-4">
                            Vous avez la possibilité d'accepter ou de refuser les cookies via le bandeau d'information affiché lors de votre première visite.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">5. Vos droits</h2>
                        <p>
                            Conformément à la réglementation européenne en vigueur, vous disposez d’un droit d’accès, de rectification, d’effacement et de portabilité de vos données personnelles. Vous pouvez exercer ces droits en nous contactant à l'adresse email : <span className="text-white">contact@equinox.mc</span>.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
