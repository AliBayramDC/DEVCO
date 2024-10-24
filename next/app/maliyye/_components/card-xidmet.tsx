import { Mail } from "lucide-react";
import Link from "next/link";

const CardXidmet = () => {
  return (
    <div className="pb-0 mt-0 md:mt-0">
      <div className="w-full bg-gradient-to-r from-[#565add] to-[#6b7cff] text-white p-10 md:p-16 shadow-lg flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-10">
        
        {/* Left Text Section */}
        <div className="text-center md:text-left text-xl md:text-3xl font-medium leading-snug">
          Devco hər zaman sizinlə
        </div>
        
        {/* Button Section */}
        <div className="flex items-center justify-center">
          <Link href="/contact2">
            <button className="flex items-center justify-center gap-3 text-lg font-semibold text-white bg-[#ffbf00] px-6 py-4 rounded-full shadow-lg hover:bg-[#ffa500] transition-transform duration-300 transform hover:scale-105">
              <Mail className="w-6 h-6" />
              Müraciət Edin
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardXidmet;
