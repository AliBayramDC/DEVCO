import { Check, Download } from "lucide-react";

const FirstSection = () => {
  return (
    <div className="md:py-20 py-10">
      <div className="text-center space-y-4 px-10">
        <div className="flex items-center justify-center space-x-4">
          {/* Left Double Line */}
          <div className="hidden md:block w-1/4 h-1 bg-[#3d2e7c] relative">
            <div className="absolute top-2 w-full h-1 bg-[#3d2e7c]"></div>
          </div>

          {/* Main Heading with Drop Shadow */}
          <div className="text-2xl md:text-3xl lg:text-5xl xl:text-4xl font-bold text-[#3d2e7c] drop-shadow-lg tracking-wide">
            MS Excel
          </div>

          {/* Right Double Line */}
          <div className="hidden md:block w-1/4 h-1 bg-[#3d2e7c] relative">
            <div className="absolute top-2 w-full h-1 bg-[#3d2e7c]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
