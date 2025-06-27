import { Mail, MapPin, Linkedin, Instagram, X, Github } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project you want me to work on or collaborate with me on an awesome idea? 
                    Feel free to reach out to me, I'm always open to discussing new opportunities!
                </p>
                
                <div className="flex justify-center">
                    <div className="space-y-8 max-w-md">
                        <h3 className="text-2xl font-semibold mb-6 text-center">Contact Me</h3>
                       
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a 
                                        href="mailto:karlcodes@gmail.com" 
                                        className="text-muted-foreground hover:text-primary transition-colors">
                                        karlcodes@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">
                                        London, United Kingdom
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 text-center">
                            <h4 className="font-medium mb-4">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Linkedin className="h-5 w-5 text-primary" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <X className="h-5 w-5 text-primary" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Instagram className="h-5 w-5 text-primary" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                                    <Github className="h-5 w-5 text-primary" />
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}