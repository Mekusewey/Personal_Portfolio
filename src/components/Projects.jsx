import { useRef, useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "./ui/Section";
import { projectsData } from "../data/portfolioData";


function ImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const nextImage = (e) => {
        e.preventDefault(); 
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full h-48 md:h-56 mb-6 rounded-xl overflow-hidden group/slider border border-slate-800 shrink-0">
        <img
            src={images[currentIndex]}
            alt="Project screenshot"
            className="w-full h-full object-contain transition-transform duration-700 group-hover/slider:scale-130 rounded-xl"
        />

        {images.length > 1 && (
            <>
            <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/60 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-cyan-500 backdrop-blur-sm"
            >
                <ChevronLeft size={18} />
            </button>
            <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/60 text-white opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-cyan-500 backdrop-blur-sm"
            >
                <ChevronRight size={18} />
            </button>
            
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, idx) => (
                <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-cyan-400 w-3" : "bg-white/40"
                    }`}
                />
                ))}
            </div>
            </>
        )}
        </div>
    );
}


function SpotlightCard({ project }) {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <div
        ref={divRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0)}
        className="relative w-full overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 group transition-all flex flex-col h-full"
        >
        <div
            className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
            opacity,
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34,211,238,0.08), transparent 40%)`,
            }}
        />
        <div className="relative z-10 flex flex-col h-full">
            
            <ImageSlider images={project.images} />

            <div className="flex flex-col flex-grow justify-between">
            <div>
                <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <div className="flex gap-3 shrink-0 ml-4">
                    <a href={project.github} className="text-slate-500 hover:text-white transition" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                    </a>
                    <a href={project.demo} className="text-slate-500 hover:text-white transition"><ExternalLink size={20} /></a>
                </div>
                </div>
                <p className="text-slate-400 leading-relaxed mb-8">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-950 text-cyan-400 border border-slate-800">
                    {tag}
                </span>
                ))}
            </div>
            </div>
        </div>
        </div>
    );
}

export default function Projects() {
    return (
        <Section id="projects" title="My Projects" subtitle="" className="bg-slate-950">
        
        <div className="flex flex-wrap justify-center gap-6">
            {projectsData.map((project) => (
            <div key={project.id} className="w-full lg:w-[calc(50%-0.75rem)] max-w-2xl flex">
                <SpotlightCard project={project} />
            </div>
            ))}
        </div>
        </Section>
    );
}