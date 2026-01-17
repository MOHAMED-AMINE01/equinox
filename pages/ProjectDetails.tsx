// Carousel component with modal and navigation arrows
const Carousel: React.FC<{ images: string[] }> = ({ images }) => {
  const [current, setCurrent] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  const goToPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };
  const goToNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <>
      <div className="relative w-full aspect-square overflow-hidden group">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Project detail ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-700 cursor-zoom-in ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            onClick={() => setModalOpen(true)}
          />
        ))}
        {/* Navigation arrows (show on hover/focus) */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200"
          onClick={goToPrev}
          aria-label="Image précédente"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 z-20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200"
          onClick={goToNext}
          aria-label="Image suivante"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
        </button>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full border border-white/40 bg-white/30 transition-all duration-300 ${i === current ? 'bg-primary border-primary scale-110' : ''}`}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              aria-label={`Voir l'image ${i + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Modal for large image */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-zoom-out"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative max-w-3xl w-full flex items-center justify-center">
            <img
              src={images[current]}
              alt={`Project detail grand ${current + 1}`}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={e => e.stopPropagation()}
            />
            {/* Modal navigation arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 z-60"
              onClick={goToPrev}
              aria-label="Image précédente"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-3 z-60"
              onClick={goToNext}
              aria-label="Image suivante"
            >
              <svg width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
import React, { FC, useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';

export const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const currentProjectIndex = projectsData.findIndex(p => p.id === parseInt(id || '0'));
  
  // React.useEffect is used to avoid attempting to navigate during the render cycle.
  React.useEffect(() => {
    if (currentProjectIndex === -1) {
      navigate('/portfolio');
    }
  }, [currentProjectIndex, navigate]);

  if (currentProjectIndex === -1) {
    return null; // Render nothing while redirecting
  }
  
  const project = projectsData[currentProjectIndex];
  const prevProject = currentProjectIndex > 0 ? projectsData[currentProjectIndex - 1] : null;
  const nextProject = currentProjectIndex < projectsData.length - 1 ? projectsData[currentProjectIndex + 1] : null;

  const projectInfo = [
    { label: 'Catégorie', value: project.category },
    { label: 'Lieu', value: project.location },
    { label: 'Année', value: project.year },
    { label: 'Client', value: project.title },
  ];

  return (
    <div className="bg-background text-white">
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>

      {/* HERO IMAGE */}
      <div className="relative h-[60vh] min-h-[450px] w-full flex flex-col justify-end overflow-hidden pt-24">
        <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10 pb-12">
          <div className="flex items-center gap-6 text-xs font-bold tracking-[0.2em] text-textMuted uppercase mb-4">
            <Link to="/portfolio" className="hover:text-primary transition-colors">Réalisations</Link>
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="">{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tight text-white drop-shadow-2xl">
            {project.title}
          </h1>
        </div>
      </div>

      {/* PROJECT INFO BAR - MARQUEE */}
      <div className="border-y border-white/10 bg-surface overflow-hidden whitespace-nowrap">
        <div className="flex animate-scroll">
          {[...Array(2)].map((_, i) => (
            <div className="flex items-center shrink-0" key={i}>
              {projectInfo.map((info, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex items-baseline gap-4 mx-8 py-8">
                    <span className="text-xs font-bold uppercase tracking-widest text-textMuted">{info.label}</span>
                    <span className="text-lg font-medium text-white">{info.value}</span>
                  </div>
                  <span className="text-primary text-2xl font-bold last-of-type:mr-16">•</span>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>


      {/* MAIN CONTENT - Inspired Layout */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          
          {/* Section 01: Challenge */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-display font-bold sticky top-32">01. <br/> Le Challenge</h2>
            </div>
            <div className="lg:col-span-8 text-lg text-textMuted leading-relaxed lg:flex lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <p className="text-xl text-white italic">{project.challenge}</p>
              </div>
              {project.gallery && (
                <div className="pt-4 lg:w-[35%] min-w-[180px] max-w-[500px] flex-shrink-0">
                  <Carousel images={project.gallery} />
                </div>
              )}
            </div>
          </div>

          {/* Section 02: Solution */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-24">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-display font-bold sticky top-32">02. <br/> La Solution</h2>
            </div>
            <div className="lg:col-span-8 text-lg text-textMuted leading-relaxed space-y-6">
              <p>{project.solution.intro}</p>
              <ul className="space-y-4 pt-2">
                {project.solution.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="text-primary w-6 h-6 shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 03: Result */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-display font-bold sticky top-32">03. <br/> Le Résultat</h2>
            </div>
            <div className="lg:col-span-8 text-lg text-textMuted leading-relaxed space-y-6">
              <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-xl text-white">
                 La précision technique au service de l’émotion.
              </blockquote>
              <p>{project.result}</p>
            </div>
          </div>

        </div>
      </section>

      {/* RELATED PROJECTS */}
      <section className="py-24 bg-surface border-y border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-12 text-center">Nos réalisations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 max-w-5xl mx-auto">
            {projectsData.filter(p => p.id !== project.id).slice(0, 2).map(relatedProject => (
              <Link to={`/portfolio/${relatedProject.id}`} key={relatedProject.id} className="group block text-left">
                <div className="overflow-hidden mb-6">
                  <img src={relatedProject.image} alt={relatedProject.title} className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 ease-in-out group-hover:scale-110" />
                </div>
                <div>
                  <p className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{relatedProject.category}</p>
                  <h3 className="text-3xl font-display font-bold text-white group-hover:text-primary transition-colors duration-300">{relatedProject.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-6 h-32 flex justify-between items-center">
          <div>
            {prevProject && (
              <Link to={`/portfolio/${prevProject.id}`} className="group flex items-center gap-4 text-left">
                <ArrowLeft className="w-12 h-12 p-3 rounded-full border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-all" />
                <div>
                  <span className="text-xs uppercase tracking-widest text-textMuted">Précédent</span>
                  <p className="font-bold text-lg text-white">{prevProject.title}</p>
                </div>
              </Link>
            )}
          </div>
          <div>
            {nextProject && (
              <Link to={`/portfolio/${nextProject.id}`} className="group flex items-center gap-4 text-right">
                 <div>
                  <span className="text-xs uppercase tracking-widest text-textMuted">Suivant</span>
                  <p className="font-bold text-lg text-white">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-12 h-12 p-3 rounded-full border border-white/20 text-white group-hover:bg-white group-hover:text-black transition-all" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};