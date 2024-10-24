import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ThirdSection = () => {
  return (
    <div className="relative py-32 bg-gradient-to-br from-[#f3f9ff] to-[#e6f0ff] overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#6b6fff] opacity-30 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#efd995] opacity-30 blur-[150px] rounded-full"></div>

      {/* Heading Section */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-bold text-[#252434]">
          Təlimlərimiz
        </h2>
        <p className="text-xl md:text-2xl text-[#5a5c6e] mt-4">
          Bizə qoşularaq təlimlərdən yararlanın
        </p>
      </div>

      {/* Cards Section with Glassmorphism */}
      <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 px-8 md:px-20">
        
        {/* Card 1 - Data Analytics */}
        <div className="group relative p-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-xl border border-opacity-20 border-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="relative z-10 text-center">
            <Image src="/images/analysis.png" alt="Data Analytics" width={80} height={80} className="mx-auto" />
            <h3 className="mt-8 text-3xl font-semibold text-[#252434]">Data Analitika</h3>
            <p className="mt-4 text-lg text-[#5a5c6e]">
            Devco-nun Data Analytics təlim proqramı iştirakçıları məlumatları təhlil etmək və şərh etmək, biznes qərarlarının qəbulu üçün təsirli anlayışlar əldə etmək üçün qabaqcıl üsullardan istifadə etməklə əsas bacarıqlarla təchiz edir.
            </p>
            <Link href="/contact">
              <Button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#6b6fff] to-[#4b42ad] text-lg font-medium text-white rounded-full hover:scale-105 transition-transform shadow-md">
                Müraciət Et
              </Button>
            </Link>
          </div>
        </div>

        {/* Card 2 - MS Excel */}
        <div className="group relative p-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-xl border border-opacity-20 border-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="relative z-10 text-center">
            <Image src="/images/excel.png" alt="Excel Training" width={80} height={80} className="mx-auto" />
            <h3 className="mt-8 text-3xl font-semibold text-[#252434]">MS Excel təlimi</h3>
            <p className="mt-4 text-lg text-[#5a5c6e]">
            Devco iştirakçıların elektron cədvəllərin idarə edilməsi və avtomatlaşdırılması üzrə bacarıqlarını artırmaq, onlara iş axınlarını və məhsuldarlığı optimallaşdırmaq üçün nəzərdə tutulmuş hərtərəfli MS Excel təlimini təklif edir.
            </p>
            <Link href="/contact">
              <Button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#6b6fff] to-[#4b42ad] text-lg font-medium text-white rounded-full hover:scale-105 transition-transform shadow-md">
                Müraciət Et
              </Button>
            </Link>
          </div>
        </div>

        {/* Card 3 - Bank Certification */}
        <div className="group relative p-10 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-xl border border-opacity-20 border-white hover:shadow-2xl hover:scale-105 transition-transform duration-300">
          <div className="relative z-10 text-center">
            <Image src="/images/attestation.png" alt="Bank Certification" width={80} height={80} className="mx-auto" />
            <h3 className="mt-8 text-3xl font-semibold text-[#252434]">Bank üzrə attestasiya təlimi</h3>
            <p className="mt-4 text-lg text-[#5a5c6e]">
            Bank Sertifikatlaşdırma Təlim proqramımız bank prinsipləri, qaydaları və təcrübələrini hərtərəfli əhatə etməklə sizi müxtəlif bank sertifikatlarına hazırlayır. Bu proqram bank sektorunda karyera qurmaq istəyən şəxslər üçün idealdır.            </p>
            <Link href="/contact">
              <Button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#6b6fff] to-[#4b42ad] text-lg font-medium text-white rounded-full hover:scale-105 transition-transform shadow-md">
                Müraciət Et
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThirdSection;
