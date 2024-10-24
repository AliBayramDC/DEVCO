import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import FourthSection from "./_components/fourth-section";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import CardXidmet from "./_components/card-xidmet";
import Testimonials from "../(landing-page)/_components/testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Maliyyə Modellərinin Yığılması"
}


const Maliyye = () => {
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
 
export default Maliyye;