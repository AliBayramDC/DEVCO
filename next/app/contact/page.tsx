import Navbar from "@/components/ui/navbar/navbar";
import ContactForm from "./_components/first-section";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Təlim üçün Müraciət"
}


const Contact = () => {
    return ( <div>
        <Navbar/>
        <ContactForm/>
    </div> );
}
 
export default Contact;