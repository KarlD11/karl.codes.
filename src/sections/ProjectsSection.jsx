
import {ExternalLink, Github, ArrowRight} from "lucide-react";


const projects = [
    {
        id: 1,
        title: "coders;",
        description: "A cool landing page for a coding blog",
        image: "/projects/project-1.png",
        tags: ["Express", "Node.js", "HTML/CSS", "Bootstrap"],
        demoUrl: "#",
        githubUrl: "#"
    },

    {
        id: 2,
        title: "To Do List",
        description: "A beautiful website allowing users to create a to do list",
        image: "/projects/project-2.png",
        tags: ["HTML/CSS", "Javascript"], 
        demoUrl: "#",
        githubUrl: "#",
    },
];



export const ProjectsSection = () => {
    return (

        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Featured 
                    <span className="text-primary"> Projects</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lgS overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full object-cover transition-transform duration=500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font=medium rounded-full bg-secomdary text-secondary-foreground">{tag}</span>
                                    ))}

                                </div>
                            
                            <h3 className="text-xl font-semibold  mb-2">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} 
                                    target="_blank" 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink />
                                        </a>
                                    <a href={project.githubUrl} 
                                    target="_blank" 
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <Github />
                                        </a>

                                </div>

                                </div>

                            </div>

                        </div>
        

                    ))}

                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    target="_blank"
                    href="https://www.github.com/KrlD11">Checkout my Github<ArrowRight size={16} />
                    </a>

                </div>

            
            </div>

        </section>
    )

}