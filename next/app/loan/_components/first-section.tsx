import React from "react";

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
            Kredit Hesablanması
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


{/* <div className="space-y-1">
          <div className="md:text-lg sm:text-xs text-[#3f4044] leading-6 md:leading-10 font-medium">
            <ul className="list-disc list-inside">
              <li>
                Kredit kalkulyatorundan istifadə etmək, kreditlər və borclar
                üçün planlamaqda və effektiv maliyyə idarəetməsində kömək edir.
              </li>
              <li>
                Bu vasitə ilə aylıq ödənişləri planlamaq, fərqli kredit
                şərtlərini müqayisə etmək və borcları idarə etmək daha asandır.
              </li>
              <li>
                Kalkulyator, şəffaflıq və maliyyə təhsili təmin edir, maliyyə
                planlaşdırmasında dəqiqlik yaradır və effektiv nəzarəti artır.
              </li>
            </ul>
          </div>
        </div> */}
