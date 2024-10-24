import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import CardXidmet from "../maliyye/_components/card-xidmet";
import FourthSection from "./_components/fourth-section";
import Footer from "@/components/ui/footer";

import { Metadata } from "next";
import BottomSection from "@/components/ui/bottom-section";

export const metadata: Metadata = {
    title: "Vebsaytların Yığılması"
}


const Vebsayt = () => {
    return (
        <div>
            <Navbar/>
            <FirstSection/>
            <FourthSection/>
            <CardXidmet/>
            <BottomSection/>
            <Footer/>
        </div>
    );
}
 
export default Vebsayt;