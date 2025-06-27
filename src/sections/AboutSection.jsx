import { Code, User, Briefcase } from 'lucide-react';


export const AboutSection = () => {
return (
<section id="about" className="py-24 px-4 relative"> 
    <div className="container mx-auto max-w-5xl ">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
            <h3 className="text-2xl font-semibold">
                Zealous Web Developer & Tech Creator
            </h3>
            <p className="text-muted-foreground">
                With over 3 ytears of experience in web development, I specialise 
                in creating responsive, user-focused and performance driven web 
                applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
                I'm a passionate developer who loves creating elegant and efficient 
                solutions to complex problems, I'm always learning new technologies 
                and staying ahead of the curve.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                    Contact Me!
                </a>

                <a href="#contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                    Download My Resume!
                </a>
            </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <Code className='w-5 h-5' />
                    </div>
                    <div className='text-left'>
                        <h4 className='font-semibold text-lg'>Web Developemnt</h4>
                        <p className='text-muted-foreground'>
                            Nuilding responsive websites and web applications with 
                            modern frameworks.
                        </p>
                    </div>
                </div>
            </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className='w-5 h-5' />
                        </div>
                        <div className='text-left'>
                            <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                            <p className='text-muted-foreground'>
                                Creating intuitive and engaging user interfaces
                                that enhance user experience.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className='w-5 h-5' />
                        </div>
                        <div className='text-left'>
                        <h4 className='font-semibold text-lg'>Work Experience</h4>
                        <p className='text-muted-foreground'>
                            Using agile methodologies to build projects from
                            concept to completion, ensuring quality and efficiency.
                        </p>
                        </div>
                    </div>
                </div>
        </div>
            

    </div>
    </div>
</section>
)
}