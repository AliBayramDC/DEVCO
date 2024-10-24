import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const BottomSection = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#3d2e7c] to-[#5a4fb7] text-white py-20 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Contact Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Əlaqə</h2>
            <div className="font-light text-lg space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#ffbf00]" />
                <span>Azərbaycan, Bakı</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ffbf00]" />
                {/* Clickable email link using mailto */}
                <a href="mailto:info@devco.az" className="hover:text-[#ffbf00] transition-colors">
                  info@devco.az
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ffbf00]" />
                {/* Clickable phone number using tel */}
                <a href="tel:+994702240677" className="hover:text-[#ffbf00] transition-colors">
                  +994 70 224 0677
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Xidmətlərimiz</h2>
            <div className="font-light text-lg space-y-3">
              <Link href="/maliyye" className="block hover:text-[#ffbf00] transition-colors">
                Maliyyə Modellərinin Yığılması
              </Link>
              <Link href="/mko" className="block hover:text-[#ffbf00] transition-colors">
                Mikro, kiçik və orta Bizneslər üçün
              </Link>
              <Link href="/vebsayt" className="block hover:text-[#ffbf00] transition-colors">
                Vebsaytların Yığılması
              </Link>
            </div>
          </div>

          {/* Training Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Təlimlərimiz</h2>
            <div className="font-light text-lg space-y-3">
              <Link href="/data-analitika" className="block hover:text-[#ffbf00] transition-colors">
                Data Analitika təlimləri
              </Link>
              <Link href="/attestasiya" className="block hover:text-[#ffbf00] transition-colors">
                Bank üzrə attestasiya təlimləri
              </Link>
              <Link href="/excel" className="block hover:text-[#ffbf00] transition-colors">
                MS Excel təlimləri
              </Link>
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Resurslar</h2>
            <div className="font-light text-lg space-y-3">
              <Link href="/loan" className="block hover:text-[#ffbf00] transition-colors">
                Kredit Hesablanması
              </Link>
              <Link href="/breakevencost" className="block hover:text-[#ffbf00] transition-colors">
              Zərərsizlik nöqtəsi (BEP)
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 border-t border-gray-400 pt-6 text-center text-sm font-light text-gray-400">
          
        </div>
      </section>
    </div>
  );
};

export default BottomSection;
