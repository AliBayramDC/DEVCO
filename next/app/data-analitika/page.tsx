import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import CardTelim from "./_components/card-telim";
import FourthSection from "./_components/fourth-section";
import Testimonials from "../(landing-page)/_components/testimonials";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Data Analitika"
}

const DataAnalitika = () => {
    return (
        <div>
            <Navbar/>
            <FirstSection/>
            
            <FourthSection/>
            <CardTelim/>
            <BottomSection/>
            <Footer/>
        </div>
    );
}
 
export default DataAnalitika;