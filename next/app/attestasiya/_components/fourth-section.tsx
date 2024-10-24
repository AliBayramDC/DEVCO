import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="pt-16 pb-32 bg-gradient-to-r from-[#1c2850] to-[#3b4a7e] text-white relative overflow-hidden">
      {/* Decorative Elements for a Modern Look */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#ffbf00] blur-[200px] rounded-full opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ff9000] blur-[200px] rounded-full opacity-20"></div>

      {/* Section 1 */}
      <div className="md:flex items-center justify-center relative z-10">
        <div className="md:w-1/2">
          <Image
            src="/images/bank-1.jpg"
            alt="Banking Training"
            width={1920}
            height={1080}
            className=" shadow-xl "
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Bu təlim kimlər üçün nəzərdə tutulub?
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Bu proqram bank və maliyyə sahəsində çalışan peşəkarlar üçün nəzərdə
            tutulub. Əgər sizin üçün karyera yüksəlişində hədd yoxdursa və siz
            daim irəli getmək istəyirsinizsə, bu təlim sizin üçündür.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 relative z-10">
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Bu təlimdə nələri öyrənəcəksiniz?
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Banklar üçün normativ sənədlər və bank qanunvericiliyi üzrə
            təlimatlar və prinsiplərini mükəmməl öyrənə biləcəksiniz.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/bank-2.jpg"
            alt="Banking Principles"
            width={1920}
            height={1080}
            className=" shadow-xl "
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="md:flex items-center justify-center mt-20 relative z-10">
        <div className="md:w-1/2">
          <Image
            src="/images/bank-3.jpg"
            alt="Banking Career Opportunities"
            width={1920}
            height={1080}
            className=" shadow-xl "
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Karyera imkanları
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Bu təlim sizi bank sahəsində karyera pilləsində irəliləməyə kömək
            edəcəkdir. Belə ki, bank qanunvericiliyi və normativ sənədlər haqqında
            biliklər sizin daim bir addım irəlidə olmağınızı təmin edəcəkdir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
