import { useEffect } from "react";
import { X, Heart, Code2, Gamepad2 } from "lucide-react";
import { personalInfo, personalInterests } from "../../data/portfolioData";

export default function AboutModal({ isOpen, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md transition-opacity overflow-y-auto">
        
        <div className="relative w-full max-w-3xl bg-slate-950 border border-slate-700 rounded-3xl shadow-2xl transform transition-all overflow-hidden my-8 mt-24">
            
            <button 
            onClick={onClose}
            className="absolute top-4 right-4 z-[60] flex items-center justify-center w-10 h-10 bg-slate-900 text-white border border-slate-600 rounded-full hover:bg-slate-800 hover:text-red-400 hover:scale-110 transition-all shadow-xl"
            >
            <X size={20} strokeWidth={2.5} />
            </button>

            <div className="h-56 w-full relative">
            <img 
                src={personalInterests.coverImage} 
                alt="Cover" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/90" />
            </div>

            <div className="px-8 pb-8 relative">
            
            <div className="absolute -top-16 left-8">
                <div className="w-32 h-32 rounded-full border-4 border-slate-950 bg-slate-800 overflow-hidden shadow-xl">
                <img 
                    src={personalInterests.profileImage} 
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center text-slate-500"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>';
                    }}
                />
                </div>
            </div>

            <div className="pt-20 mb-6 max-w-2xl">
                <h3 className="text-3xl font-bold text-white flex items-center gap-2">
                {personalInfo.name}
                <span className="text-cyan-500 bg-cyan-500/10 p-1.5 rounded-full" title="Verified Developer">
                    <Code2 size={16} />
                </span>
                </h3>
                <p className="text-cyan-400 font-medium mt-1 text-lg"></p>
                <p className="text-slate-400 mt-4 leading-relaxed">
                {personalInterests.aboutMe}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8 border-t border-slate-800/50 pt-8">
                
                <div className="flex flex-col gap-10">
                
                <div>
                    <div className="flex items-center gap-2 text-slate-200 mb-6">
                    <Heart size={20} className="text-pink-500" />
                    <h4 className="font-semibold text-xl">Interests</h4>
                    </div>
                    <div className="flex flex-wrap gap-3">
                    {personalInterests.hobbies.map((hobby, idx) => (
                        <span key={idx} className="px-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-300 font-medium hover:border-slate-600 transition-colors">
                        {hobby}
                        </span>
                    ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-slate-200 mb-6">
                    <Gamepad2 size={20} className="text-violet-500" />
                    <h4 className="font-semibold text-xl">What i play</h4>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {personalInterests.games?.map((game, idx) => (
                        <div key={idx} className="relative group rounded-xl overflow-hidden border border-slate-800 bg-slate-900 aspect-[3/4] shadow-lg cursor-pointer">
                        <img 
                            src={game.image} 
                            alt={`${game.name} cover`} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                        
                        <div className="absolute bottom-0 left-0 w-full p-3">
                            <span className="text-xs sm:text-sm font-bold text-white drop-shadow-md line-clamp-2 leading-tight">
                            {game.name}
                            </span>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

                </div>

                <div>
                <div className="flex items-center gap-2 text-slate-200 mb-4">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-[#1DB954]">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.62 18.66 12.9c.48.3.6.84.3 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.26-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                    </svg>
                    <h4 className="font-semibold text-xl">My Playlist</h4>
                </div>
                

                <div className="rounded-xl overflow-hidden bg-slate-900 border border-slate-800 shadow-inner">
                    <iframe 
                    style={{ borderRadius: '12px' }} 
                    src={personalInterests.spotifyEmbedLink} 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen="" 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                    ></iframe>
                </div>
                </div>

            </div>
            </div>
        </div>
        </div>
    );
}