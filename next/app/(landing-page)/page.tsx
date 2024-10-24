import Navbar from "@/components/ui/navbar/navbar"
import FirstSection from './_components/first-section'
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import Xidmetler from "./_components/xidmet";
import ThirdSection from "./_components/third-section";
import Testimonials from "./_components/testimonials";


const LandingPage = () => {
    return ( <div>
        <Navbar />
        <FirstSection />
        <Xidmetler/>
        <ThirdSection/>
        
        {/* <Testimonials/> */}
        {/* <BottomCard/> */}
        <BottomSection/>
        <Footer/>
    </div> );
}

export default LandingPage;