import { FaReact } from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'


export const FooterSection = () => {

    return (
        <footer className="py-4 px-4 bg-card border-t border-border mt-4 pt-4 flex flex-wrap justify-center items-center">
            <p> © { new Date().getFullYear() } Karl.Codes. All rights reserved | Built with 
                <FaReact className="text-blue-500 inline mx-1" />
                <SiTailwindcss className="text-cyan-500 inline mx-1" />
            </p>
        </footer>
    )

}