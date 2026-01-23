import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projects';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const categories = ['Tous', ...Array.from(new Set(projectsData.map(p => p.category)))];

  const filteredProjects = activeCategory === 'Tous'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen text-white">
      {/* HEADER SECTION (Hero) */}
      <div className="relative h-[50vh] min-h-[400px] w-full flex flex-col justify-center items-center overflow-hidden border-b border-white/5 pt-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop"
            alt="Portfolio Header"
            className="w-full h-full object-cover grayscale scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center animate-up">
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8 drop-shadow-2xl">
            Nos Réalisations
          </h1>
          <div className="flex items-center justify-center gap-6 text-xs font-bold tracking-[0.2em] text-textMuted uppercase">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-white">Réalisations</span>
          </div>
        </div>
      </div>

      {/* FILTERS & PROJECTS SECTION */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {/* Filters */}
          {/* <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-16">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative font-bold text-lg uppercase tracking-wider transition-colors duration-300 group ${activeCategory === category ? 'text-white' : 'text-textMuted hover:text-white'}`}
              >
                {category}
                <span className={`absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-transform duration-300 scale-x-0 group-hover:scale-x-100 ${activeCategory === category ? 'scale-x-100' : ''}`}></span>
              </button>
            ))}
          </div> */}

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {filteredProjects.map(project => (
              <Link to={`/portfolio/${project.id}`} key={project.id} className="group block text-left">
                <div className="overflow-hidden mb-6 relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>

                  {/* Large Centered Arrow Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <img
                      /* src="https://wgl-dsites.net/bili/wp-content/uploads/2022/03/arrow_infobox.png" */
                      src="/EQUINOX-LOGO_monogramme_B.png"
                      alt="Voir le projet"
                      className="w-32 h-32 md:w-48 md:h-48 opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-500 ease-out"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{project.location}</p>
                  <h3 className="text-3xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </Link>
            ))}
            {filteredProjects.length === 0 && (
              <div className="md:col-span-2 text-center text-textMuted py-16">
                Aucune réalisation trouvée dans cette catégorie.
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};