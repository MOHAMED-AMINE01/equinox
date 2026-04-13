import React from 'react';

export const Legal: React.FC = () => {
    return (
        <div className="bg-background text-white">
            {/* HERO SECTION */}
            <div className="relative h-[60vh] min-h-[300px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-24">
                <img
                    src="/ML_PC/EQUINOX-conception-installation-grandes-cuisines.png"
                    alt="Mentions Légales"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-black/40"></div>
                <div className="relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-4 text-white">
                        Mentions Légales
                    </h1>
                </div>
            </div>

            <div className="container mx-auto px-6 max-w-4xl py-24">

                <div className="space-y-12 text-textMuted leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">1. Présentation du site</h2>
                        <p>
                            En vertu de l'article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site <span className="text-white font-medium">www.equinox.mc</span> l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :
                        </p>
                        <ul className="mt-4 space-y-2 list-disc pl-6">
                            <li><span className="text-white font-medium">Propriétaire :</span> EQUINOX</li>
                            <li><span className="text-white font-medium">Responsable publication :</span> Direction Générale – contact@equinox.mc</li>
                            <li><span className="text-white font-medium">Hébergeur :</span> [Nom de votre hébergeur] – [Adresse de l'hébergeur]</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">2. Conditions générales d’utilisation du site</h2>
                        <p>
                            L’utilisation du site implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site sont donc invités à les consulter de manière régulière.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">3. Description des services fournis</h2>
                        <p>
                            Le site a pour objet de fournir une information concernant l’ensemble des activités de la société EQUINOX. La société s’efforce de fournir sur le site des informations aussi précises que possible. Toutefois, elle ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">4. Propriété intellectuelle et contrefaçons</h2>
                        <p>
                            EQUINOX est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site est interdite, sauf autorisation écrite préalable de : EQUINOX.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-display font-bold text-white mb-4">5. Limitations de responsabilité</h2>
                        <p>
                            EQUINOX ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site. Le site utilise la technologie JavaScript. EQUINOX ne pourra être tenue responsable de dommages matériels liés à l’utilisation du site.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
