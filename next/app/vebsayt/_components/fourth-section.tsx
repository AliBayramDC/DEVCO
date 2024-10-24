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
            src="/images/veb-4.jpg"
            alt="image"
            width={1920}
            height={1080}
            className="shadow-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Vebsayt Nədir?
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Veb səhifələrdən ibarət olan, adətən bir-birinə hiperlinklə əlaqələndirilən və bir domeyn altında yerləşən veb səhifələr toplusudur.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 relative z-10">
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Vebsayt niyə vacibdir?
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Veb sayt biznesi onlayn bazara çıxarmaq imkanı verir və eyni zamanda bu strategiya möhkəm biznes etibarlılığını şərtləndirir.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/veb-3.jpg"
            alt="image"
            width={1920}
            height={1080}
            className="shadow-xl"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="md:flex items-center justify-center mt-20 relative z-10">
        <div className="md:w-1/2">
          <Image
            src="/images/veb-1.jpg"
            alt="image"
            width={1920}
            height={1080}
            className="shadow-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Vebsyat biznesinizi professional edir
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Bugünkü istehlakçıların 84%-i hesab edir ki, veb-sayt biznesinizi yalnız sosial media profilləri olan şirkətlərdən daha etibarlı edir.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 relative z-10">
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Uzun müddətli planınıza kömək edir
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            2022-ci ilin yanvar ayına olan məlumata görə, demək olar ki, 6,66 milyard insan internetdən istifadə edib.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/veb-2.jpg"
            alt="image"
            width={1920}
            height={1080}
            className="shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
