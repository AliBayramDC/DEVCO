import Navbar from "@/components/ui/navbar/navbar";
import ContactForm2 from "./_components/first-section";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Xidmət üçün müraciət"
}


const Contact2 = () => {
    return (
        <div>
            <Navbar/>
            <ContactForm2/>
        </div>
    );
}
 
export default Contact2;