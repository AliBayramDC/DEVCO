import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Haqqımızda"
}

const Haqqimizda = () => {
    return (
        <div>
            <Navbar/>
            <FirstSection/>
            <BottomSection/>
            <Footer/>
        </div>
    );
}
 
export default Haqqimizda;