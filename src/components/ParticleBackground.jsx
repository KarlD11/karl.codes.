import React, { useEffect, useState } from 'react';




export const ParticleBackground = () => {
    const [stars, setStars] = useState([]);
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        generateStars();
        generateParticles();

        const handleResize = () => {
            generateStars();
        }

        window.addEventListener('resice', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        
        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, 
            });
        }

        setStars(newStars);
    };


    const generateParticles = () => {
        const numberOfParticles = 8;
        
        const newParticles = [];

        for (let i = 0; i < numberOfParticles; i++) {
            newParticles.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 50,
                dalay: Math.random() * 25,
                animationDuration: Math.random() * 3 + 3, 
            });
        }

        setParticles(newParticles);
    };



    return ( 
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => 
                <div 
                    key={star.id} 
                    className="star animate-pulse-subtle" 
                    style={{
                        width: star.size + "px",
                        height: star.size + "px", 
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            )}

            {particles.map((particle) => 
                <div 
                    key={particle.id} 
                    className="meteor animate-meteor" 
                    style={{
                        width: particle.size * 10 + "px",
                        height: particle.size + "px", 
                        left: particle.x + "%",
                        top: particle.y + "%",
                        animationDelay: particle.delay,
                        animationDuration: particle.animationDuration + "s",
                    }}
                />
            )}  
        </div>
    );
};