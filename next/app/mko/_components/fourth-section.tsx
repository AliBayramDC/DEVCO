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
            src="/images/mko-1.jpg"
            alt="image"
            width={1920}
            height={1080}
            className="shadow-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Mal qalığının idarə olunması
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Mal qalığı hər bir şirkət üçün əsas aktivlərdəndir. Ticarət, istehsal, qida xidmətləri və digər sektorlarda mal qalığının düzgün idarə olunması birbaşa gəlirlərə təsir edən amillərdəndir.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 relative z-10">
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Alış və Satışların idarə olunması
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Alış və Satışların idarə edilməsi, satıcı və alıcı məlumatlarını, alış və satış qiymətini, prosesini idarə etmək üçün nəzərdə tutulmuşdur.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/mko-2.jpg"
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
            src="/images/mko-3.jpg"
            alt="image"
            width={1920}
            height={1080}
            className="shadow-xl"
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Xərclərə nəzarət
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Mənfəət və Xərclərin idarə edilməsinə diqqət yetirmək hər bir şirkət üçün çox vacibdir. Şirkətlər mənfəət və zərər hesabatını idarə etməli, mənfəətin artırılması və xərclərin gəlirə uyğun nəzarətdə saxlanmasını təmin etməlidirlər.
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center mt-20 relative z-10">
        <div className="mt-10 md:mt-0 md:w-1/2 px-10 md:px-16">
          <h2 className="text-4xl md:text-6xl font-bold text-[#ffbf00] leading-tight">
            Üstünlüklər
          </h2>
          <p className="mt-5 text-lg md:text-2xl font-light leading-8 text-gray-200">
            Bir dəfə əldə edirsiz və istədiyiniz qədər istifadə etmə imkanı. Digər həllərlə müqayisədə ucuz olması və istifadəsinin asan olması.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/images/mko-4.jpg"
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
