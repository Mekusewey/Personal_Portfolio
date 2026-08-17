import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-slate-950">
        <div className="absolute top-0 -left-40 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob" />
        <div className="absolute top-0 -right-40 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-4000" />

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center px-4 max-w-4xl"
        >
            <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-6 block">
            {personalInfo.title}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-200 mb-4">
            Hi, I'm <span className="text-white">{personalInfo.name}</span>
            </h1>
            
            <h2 className="text-6xl md:text-8xl font-black text-slate-100 tracking-tighter leading-tight">
            Turning Complexity<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
                into Clarity.
            </span>
            </h2>
            
            <p className="mt-8 text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {personalInfo.bio || "Making technology easier to use through clean design, smart problem-solving."}
            </p>

            <div className="mt-12 flex justify-center gap-4">
            <a href="#projects" className="relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-slate-100 px-8 font-semibold text-slate-950 transition-all hover:scale-105 hover:bg-white focus:outline-none focus:ring-2 focus:ring-slate-400">
                My Projects
            </a>
            </div>
        </motion.div>
        </section>
    );
}