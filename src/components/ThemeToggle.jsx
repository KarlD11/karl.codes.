import React, { useState } from 'react';
import { Sun } from 'lucide-react';
import { Moon } from 'lucide-react';
import { useEffect } from 'react';
import { cn } from '../lib/utils';




export const ThemeToggle = () => {
    const [isItDark, setIsItDark] = useState(false);

    useEffect(() => {
        const chosenTheme = localStorage.getItem("theme");
        if (chosenTheme === 'dark') {
            document.documentElement.classList.add("dark");
            setIsItDark(true);      
        } else { 
            document.documentElement.classList.remove("dark");
            setIsItDark(false); 
        }

    }, []);


    const toggleTheme = () => {
        if(isItDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsItDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsItDark(true);
        }
    } 

    return (
        <button onClick={toggleTheme} 
        className={cn("fixed max-sm:hidden top-12 right-15 z-50 p-2 rounded-full", 
        "transition-colors duration-300 focused:outline-hidden")}> 
        { isItDark  ? ( <Sun className='h-6 w-6 text-yellow-400'/> ) 
        : ( <Moon className='h-6 w-6 text-blue-900' /> ) }
        </button>
    );
};