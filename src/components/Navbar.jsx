import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
    { name: "Home", href: "#herp" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => { 
    const [hasItScrolled, setHasItScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleHasItScrolled = () => {
            setHasItScrolled(window.scrollY > 10);
        }
        window.addEventListener("scroll", handleHasItScrolled);
        return () => window.removeEventListener("scroll", handleHasItScrolled);
    }, []);
    
    return (
        <nav 
            className={cn("fixed w-full z-60 transition-all duration-300",
                hasItScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" 
                : "py-5"
            )}>
            <div className="container flex items-center justify-evenly">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">
                        Karl.</span>
                        Codes.
                    </span>
                </a>
                
                {/* Desktop Navigation Bar */}
                <div className="hidden md:flex justify-end space-x-8 left-1/2">
                    {navItems.map((items, index) => (
                        <a key={index} href={items.href} 
                        className="text-foreground hover:text-primary transition-colors duration-300">
                            {items.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Navigation Bar */}

                <button 
                onClick={() => setIsMenuOpen((prev) => !prev)} 
                className="md:hidden p-2 text-foreground z-50" aria-label={isMenuOpen ? "Close" : "Open Menu"}> 
                { isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div 
                className={cn("fixed inset-0 bg-background/95 backdrop-blut-md z-40 flex flex-col", 
                "items-center justify-center transition-all duration-300 md:hidden", 
                isMenuOpen 
                ? "opacity-100 pointer-events-auto" 
                : "opacity-0 pointer-events-none" )}>
                    <div 
                    className="flex flex-col space-y-8 text-xl md:hidden">
                        {navItems.map((items, index) => (
                            <a 
                            key={index} 
                            href={items.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300" 
                            onClick={() => setIsMenuOpen(false)}
                            >
                                {items.name}
                            </a>
                        ))}
                    </div>
                </div>
            
            </div>
        </nav>
    )
}