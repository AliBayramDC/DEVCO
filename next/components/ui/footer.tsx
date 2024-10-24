import { Facebook, Globe, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from 'next/link';

const Footer = () => {
    return ( 
    
    <div>
        <section className="md:flex flex-col md:py-5 md:justify-between">
            <div className="p-10 space-y-10 md:space-y-0 md:text-center text-center md:flex justify-between md:px-80 md:space-x-20">
                <div>
                © 2024 Devco. Bütün hüquqlar qorunur.
                </div>
               
                
                <div className="flex items-center justify-center space-x-2">
                    <Link href="https://twitter.com" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="bg-[#1DA1F2] p-2 rounded-full">
                        <Twitter className="h-6 w-6 text-white" />
                        </a>
                    </Link>
                    <Link href="https://facebook.com" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="bg-[#1877F2] p-2 rounded-full">
                        <Facebook className="h-6 w-6 text-white" />
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/devco_consulting/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] p-2 rounded-full">
                        <Instagram className="h-6 w-6 text-white" />
                        </a>
                    </Link>
                    <Link href="https://www.linkedin.com/company/devco-consult-ing/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="bg-[#0077B5] p-2 rounded-full">
                        <Linkedin className="h-6 w-6 text-white" />
                        </a>
                    </Link>
                    <Link href="https://youtube.com" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className="bg-[#FF0000] p-2 rounded-full">
                        <Youtube className="h-6 w-6 text-white" />
                        </a>
                    </Link>
                    </div>
               

            </div>

        </section>

    </div> );
}
 
export default Footer;