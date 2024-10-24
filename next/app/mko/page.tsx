import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import FourthSection from "./_components/fourth-section";
import CardXidmet from "../maliyye/_components/card-xidmet";
import Testimonials from "../(landing-page)/_components/testimonials";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mikro, Kiçik və Orta Biznesə Dəstək"
}

const MKO = () => {
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
 
export default MKO;