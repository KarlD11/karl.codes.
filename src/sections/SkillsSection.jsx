import { useState } from "react"
import { cn } from "../lib/utils";

// My set of skills
const Skills = [
    // Front end
    {name: 'HTML/CSS', level: 95, category: 'frontend'},
    {name: 'JavaScript', level: 90, category: 'frontend'},
    {name: 'React', level: 85, category: 'frontend'},
    {name: 'Typescript', level: 80, category: 'frontend'},
    {name: 'Tailwind CSS', level: 85, category: 'frontend'},
    {name: 'Next.js', level: 75, category: 'frontend'}, // Changed from backend to frontend

    // Backend
    {name: 'Node.js', level: 80, category: 'backend'},
    {name: 'Express.js', level: 85, category: 'backend'},
    {name: 'MongoDB', level: 75, category: 'backend'},
    {name: 'PostgreSQL', level: 80, category: 'backend'},
    {name: 'GraphQL', level: 70, category: 'backend'},
    {name: 'REST APIs', level: 80, category: 'backend'},

    // Tools
    {name: 'Git/Github', level: 90, category: 'tools'},
    {name: 'Docker', level: 75, category: 'tools'},
    {name: 'VS Code', level: 90, category: 'tools'},
]

// Filter Categories
const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = Skills.filter((skill) => 
        activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id='skills' className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Filter Selection of skills */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key} 
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize", 
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease_out]" 
                                    style={{ width: skill.level + "%" }} 
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}