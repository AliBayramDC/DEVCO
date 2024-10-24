import { Button } from "@/components/ui/button";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="relative xl:py-36 py-10 px-10 bg-gradient-to-br from-[#000046] to-[#1c1c83] overflow-hidden">
      {/* Moving spotlight effect */}
      <div className="absolute inset-0 bg-spotlight opacity-40 animate-spotlight z-0"></div>

      <div className="md:items-center flex flex-col relative z-10">
        {/* Heading with slight glow */}
        <div className="lg:text-5xl xl:text-6xl text-4xl flex justify-center font-medium text-[#fff] pt-10 glow-text">
          Dev<span className="text-[#71a2d6]">Co</span>
        </div>

        {/* Subheading */}
        <p className="text-xl xl:text-3xl font-light xl:w-1/2 text-[#fff] lg:pt-6 pt-6 text-center mx-auto">
          Məsləhətçilik və Təlimdə mükəmməlliyə gedən yolunuz.
        </p>

        {/* Call to Action Button */}
        <div className="flex gap-4 py-10 xl:pt-10 justify-center">
          <Link href={"/contact"}>
            <Button
              className="
                xl:text-3xl
                text-xl
                font-light
                rounded-[60px]
                border-8
                border-[#EEEEEE]
                py-6
                px-8
                xl:py-10
                xl:px-16
                bg-[#fff]
                transition-all
                duration-300
                shadow-lg
                hover:shadow-indigo-500
                hover:scale-110
                hover:bg-gradient-to-r
                hover:from-[#71a2d6]
                hover:to-[#6b6fff]
                hover:text-[#fff]
                text-[#4b42ad]
              "
            >
              Müraciət
            </Button>
          </Link>
        </div>

        {/* Video Section */}
        <div className="xl:pt-28 relative">
          {/* Remove overlay glow effect from video itself */}
          <video
            className="rounded-[40px] shadow-indigo-400 shadow-2xl xl:w-5/6 xl:mx-auto transition-transform duration-500 hover:scale-105"
            autoPlay
            muted
            loop
          >
            <source src="/videos/video-1.mp4" type="video/mp4" />
          </video>

          {/* Keep a subtle glow around the video container instead */}
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#71a2d6] to-[#6b6fff] opacity-10 blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
