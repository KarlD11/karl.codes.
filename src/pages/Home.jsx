import { ThemeToggle } from '../components/ThemeToggle';
import { ParticleBackground } from '../components/ParticleBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../sections/HeroSection';
import { AboutSection } from '../sections/AboutSection';
import { SkillsSection } from '../sections/SkillsSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ContactSection } from '../sections/ContactSection';
import { FooterSection } from '../sections/FooterSection';



export const Home = () => {
    return (
        <div className="min-h-screen bf-background text-foreground overflow-hidden">
            {/* Toggle Light/Darl */}
            <ThemeToggle />

            {/* Particle Background */}
            <ParticleBackground />

            {/* Navigation Bar */}
            <Navbar />

            {/* Main Contant */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            {/* Footer */}
            <FooterSection />
        </div>
    )
}