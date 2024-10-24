import { Check, BarChart2, FileText, Globe } from "lucide-react"; // Importing new icons
import Link from "next/link";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="bg-white">
      {/* Updated Fancy Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1c2850] to-[#3b4a7e] text-white lg:py-28 py-16 px-5">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          {/* Fancy Heading with Shadow and Gradient */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight drop-shadow-lg">
            Devco-ya xoş gəlmisiniz!
          </h1>

          {/* Subheading with Larger Font and Gradient Effect */}
          <p className="text-2xl md:text-3xl font-light mt-5 md:mt-10 text-[#ffbf00] leading-relaxed md:leading-loose drop-shadow-md">
            Devco-da biz innovativ konsaltinq və hərtərəfli təlim həlləri
            vasitəsilə biznesləri və fərdləri gücləndirməkdə həvəsliyik. Biznes
            əməliyyatlarını dəyişdirmək və böyüməyə təkan vermək vizyonu ilə
            qurulan firmamız müştərilərimizin müxtəlif ehtiyaclarını ödəmək üçün
            hazırlanmış ekspert xidmətləri və proqramları təqdim etməkdə
            ixtisaslaşır.
          </p>

          {/* Call to Action Button */}
          <div className="mt-10">
            <Link href={"/contact"}>
            <button className="px-8 py-4 bg-[#ffbf00] text-black text-xl font-semibold rounded-full shadow-lg hover:bg-[#ffa500] transition-transform duration-300 transform hover:scale-105">
              Bizə müraciət edin
            </button>
            </Link>
          </div>
        </div>

        {/* Decorative Gradient Background Circles */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#ffbf00] rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffa500] rounded-full blur-xl opacity-20"></div>
      </div>

      {/* Our Mission Section with Animations */}
      <div className="py-24 px-5 md:px-20 bg-[#f1f5f9] relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1c2850] mb-5 animate-fade-in">
            Bizim Missiyamız
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-[#1f3575] font-light leading-relaxed max-w-3xl mx-auto animate-fade-up">
            Missiyamız qabaqcıl konsaltinq xidmətləri və dünya səviyyəli təlim
            proqramları təklif etməklə biznes və fiziki şəxsləri gücləndirməkdir.
            Biz müştərilərimizə problemlərini həll etməyə, fürsətlərdən istifadə
            etməyə və məqsədlərinə çatmağa kömək edən etibarlı tərəfdaş olmağa çalışırıq.
          </p>
        </div>
      </div>

      {/* Who We Are Section with Layered Animation */}
      <div className="relative bg-white py-24 px-5 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <Image
              src="/images/welcome.jpg"
              alt="Devco Team"
              width={600}
              height={400}
              className="rounded-xl shadow-lg transform"
            />
          </div>
          <div className="animate-fade-left">
            <h2 className="text-4xl font-semibold text-[#1c2850] mb-5">
              Biz Kimik?
            </h2>
            <p className="text-xl text-[#1f3575] font-normal leading-relaxed">
              Devco, həyata keçirdiyimiz hər bir layihədə mükəmməlliyi təmin etməyə
              həsr olunmuş dinamik konsaltinq və təlim şirkətidir. Komandamız məlumat
              analitikası, maliyyə idarəçiliyi, veb inkişafı və biznes konsaltinqində
              dərin təcrübəyə malik təcrübəli mütəxəssislərdən ibarətdir.
            </p>
          </div>
        </div>
      </div>

      {/* What We Do Section with Hover Effects and New Icons */}
      <div className="py-24 px-5 md:px-20 bg-gradient-to-r from-[#e3f2ff] to-[#ffffff] relative z-10">
        <div className="absolute top-0 left-0 w-48 h-48 bg-[#1c2850] rounded-full opacity-20"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ffbf00] rounded-full opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#1c2850] mb-10">
            Biz Nə Edirik?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
            {/* Consulting */}
            <div className="bg-white shadow-lg rounded-lg p-10 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="mb-5">
                <BarChart2 className="w-12 h-12 text-[#1c2850]" /> {/* Bar chart icon */}
              </div>
              <h3 className="text-xl font-semibold text-[#1c2850]">
                Məsləhət Xidmətləri
              </h3>
              <p className="mt-3 text-lg text-[#1f3575] font-normal">
                Bizim konsaltinq xidmətlərimiz əməliyyatları optimallaşdırmaq,
                qərarların qəbulunu təkmilləşdirmək və biznes fəaliyyətini artırmaq
                üçün nəzərdə tutulub.
              </p>
            </div>
            {/* Training */}
            <div className="bg-white shadow-lg rounded-lg p-10 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="mb-5">
                <FileText className="w-12 h-12 text-[#1c2850]" /> {/* File Text Icon */}
              </div>
              <h3 className="text-xl font-semibold text-[#1c2850]">
                Təlim Proqramları
              </h3>
              <p className="mt-3 text-lg text-[#1f3575] font-normal">
                Təlim təkliflərimizə Data Analitikası, MS Excel və Bank Sertifikatlaşdırma Təlimləri daxildir.
              </p>
            </div>
            {/* Web Development */}
            <div className="bg-white shadow-lg rounded-lg p-10 hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 hover:scale-105">
              <div className="mb-5">
                <Globe className="w-12 h-12 text-[#1c2850]" /> {/* Globe icon */}
              </div>
              <h3 className="text-xl font-semibold text-[#1c2850]">
                Veb İnkişafı
              </h3>
              <p className="mt-3 text-lg text-[#1f3575] font-normal">
                React və Next.js-dən istifadə edərək müasir və istifadəçi dostu veb-saytlar yaradılır.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
