import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Xidmetler = () => {
  return (
    <div className="bg-[#f3f9ff] pt-16">
      {/* Title */}
      <div className="relative z-10 text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-bold text-[#252434]">
          Xidmətlərimiz
        </h2>
        <p className="text-xl md:text-2xl text-[#5a5c6e] mt-4">
          Bizə qoşularaq xidmətlərdən yararlanın
        </p>
      </div>

      {/* Cards Section */}
      <div className="md:flex items-stretch justify-center px-10 space-y-10 md:space-y-0 md:space-x-8 mb-18">
        {/* Card 1 - MSME */}
        <div className="bg-gradient-to-br from-[#eff0ff] to-[#dfe3ff] rounded-[20px] md:rounded-[40px] md:w-1/3 p-10 flex flex-col">
          <Image
            src="/images/msmb.svg"
            alt="Mikro, Kiçik və Orta Biznesə Dəstək"
            width={1920}
            height={1080}
            className="h-40 mx-auto"
          />
          <div className="text-xl font-semibold text-center text-[#2b1c50] pt-10">
            Mikro, Kiçik və Orta Biznesə Dəstək
          </div>
          <div className="text-[#2b1c50] text-center leading-8 pt-4 flex-grow">
            Devco, MSME-lərə hərtərəfli konsaltinq dəstəyi verir, onlara strateji inkişafa və əməliyyat mükəmməlliyinə nail olmağa kömək edir.
          </div>
          <div className="flex items-center justify-center pt-10">
            <Link href="/contact2">
              <Button className="text-lg mt-4 mb-10 rounded-full text-white bg-gradient-to-r from-[#4b42ad] to-[#6b6fff] p-6 shadow-lg hover:scale-110 transition-transform duration-300">
                Müraciət Et
              </Button>
            </Link>
          </div>
        </div>

        {/* Card 2 - Finance Models */}
        <div className="bg-gradient-to-br from-[#eff0ff] to-[#dfe3ff] rounded-[20px] md:rounded-[40px] md:w-1/3 p-10  flex flex-col">
          <Image
            src="/images/finance.svg"
            alt="Maliyyə Modellərinin Yığılması"
            width={1920}
            height={1080}
            className="h-40 mx-auto"
          />
          <div className="text-xl font-semibold text-center text-[#2b1c50] pt-10">
            Maliyyə Modellərinin Yığılması
          </div>
          <div className="text-[#2b1c50] text-center leading-8 pt-4 flex-grow">
            Devco, təşkilatlara təsirli anlayışlar və davamlı inkişaf strategiyaları ilə gücləndirmək üçün qabaqcıl biznes modelləri üzrə məsləhət xidmətləri təklif edir.
          </div>
          <div className="flex items-center justify-center pt-10">
            <Link href="/contact2">
              <Button className="text-lg mt-4 mb-10 rounded-full text-white bg-gradient-to-r from-[#4b42ad] to-[#6b6fff] p-6 shadow-lg hover:scale-110 transition-transform duration-300">
                Müraciət Et
              </Button>
            </Link>
          </div>
        </div>

        {/* Card 3 - Web Development */}
        <div className="bg-gradient-to-br from-[#eff0ff] to-[#dfe3ff] rounded-[20px] md:rounded-[40px] md:w-1/3 p-10  flex flex-col">
          <Image
            src="/images/web.svg"
            alt="Vebsaytların Yığılması"
            width={1920}
            height={1080}
            className="h-40 mx-auto"
          />
          <div className="text-xl font-semibold text-center text-[#2b1c50] pt-10">
            Vebsaytların Yığılması
          </div>
          <div className="text-[#2b1c50] text-center leading-8 pt-4 flex-grow">
            Devco, qüsursuz naviqasiya üçün optimallaşdırılmış, müasir texnologiyalardan istifadə edərək yüksək performanslı, istifadəçi dostu vebsaytlar yaradır.
          </div>
          <div className="flex items-center justify-center pt-10">
            <Link href="/contact2">
              <Button className="text-lg mt-4 mb-10 rounded-full text-white bg-gradient-to-r from-[#4b42ad] to-[#6b6fff] p-6 shadow-lg hover:scale-110 transition-transform duration-300">
                Müraciət Et
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Xidmetler;
