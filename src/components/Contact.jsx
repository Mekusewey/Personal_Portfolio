import Section from "./ui/Section";
import { Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Contact() {
    return (
        <Section id="contact" title="Let's Connect" subtitle="Currently open for new opportunities and collaborations." className="bg-slate-950">
        <div className="max-w-2xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px]" />
            
            <p className="text-slate-300 text-lg mb-8 relative z-10">
            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href={`mailto:${personalInfo.socials.email}`} className="flex items-center gap-2 bg-cyan-500 text-slate-950 px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-colors w-full sm:w-auto justify-center">
                <Mail size={20} />
                Say Hello
            </a>
            
            <div className="flex gap-4 w-full sm:w-auto justify-center">
                {personalInfo.socials.github && (
                <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-950 border border-slate-800 rounded-full text-slate-400 hover:text-white hover:border-slate-600 transition-colors" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                </a>
                )}
                {personalInfo.socials.linkedIn && (
                <a href={personalInfo.socials.linkedIn} target="_blank" rel="noreferrer" className="p-4 bg-slate-950 border border-slate-800 rounded-full text-slate-400 hover:text-blue-400 hover:border-slate-600 transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                )}
            </div>
            </div>
        </div>
        </Section>
    );
}