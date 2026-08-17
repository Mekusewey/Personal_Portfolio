import Section from "./ui/Section";
import { skills } from "../data/portfolioData";

export default function Skills() {
    return (
        <Section id="skills" title="Technical Arsenal" subtitle="The core technologies I utilize to build modern applications." className="bg-slate-900 border-y border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((group, index) => (
            <div key={index} className="p-8 rounded-3xl bg-slate-950 border border-slate-800/50 shadow-xl">
                <h3 className="text-xl font-bold text-slate-100 mb-6">{group.category}</h3>
                <ul className="space-y-5">
                {group.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center text-slate-300 hover:text-white transition-colors">
                    <img 
                        src={skill.icon} 
                        alt={`${skill.name} logo`} 
                        className="w-6 h-6 mr-4" 
                    />
                    <span className="font-semibold text-sm tracking-wide">{skill.name}</span>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </Section>
    );
}