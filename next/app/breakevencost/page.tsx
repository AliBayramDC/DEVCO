"use client"
import Navbar from "@/components/ui/navbar/navbar";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import BreakevenPage from "./_components/BreakevenAnalysisPage";


const BreakevenCost = () => {
    return (
        <div>
            <Navbar/>
            <BreakevenPage/>
            <BottomSection/>
            <Footer/>
        </div>
    );
}
 
export default BreakevenCost;