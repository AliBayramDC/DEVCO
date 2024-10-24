import Navbar from "@/components/ui/navbar/navbar";
import CardTelim from "../data-analitika/_components/card-telim";
import FourthSection from "./_components/fourth-section";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import FirstSection from "./_components/first-section";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bank üzrə attestasiya təlimi"
}

const Attestasiya = () => {
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
 
export default Attestasiya