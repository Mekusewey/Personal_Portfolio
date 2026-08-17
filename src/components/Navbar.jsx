import { motion } from "framer-motion";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../utils/cn";

export default function Navbar() {
    const activeSection = useActiveSection(["home", "projects", "skills", "contact"]);

    const navLinks = [
        { name: "Home", id: "home" },
        { name: "Projects", id: "projects" },
        { name: "Skills", id: "skills" },
        { name: "Contact", id: "contact" },
    ];

    return (
        <div className="fixed top-6 w-full flex justify-center z-50 px-4 pointer-events-none">
        <nav className="pointer-events-auto flex items-center gap-1 px-2 py-2 bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-full shadow-2xl shadow-cyan-900/20 overflow-hidden">
            {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
                <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                    "relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                    isActive ? "text-slate-950" : "text-slate-400 hover:text-slate-100"
                )}
                >
                {isActive && (
                    <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-cyan-400 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    style={{ zIndex: -1 }}
                    />
                )}
                <span className="relative z-10">{link.name}</span>
                </a>
            );
            })}
        </nav>
        </div>
    );
}