import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
  ArrowRight,
} from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-white pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden">
      <Accordion
        className="
            pl-2
            "
        type="single"
        collapsible
      >
        <AccordionItem className="my-6 border-b" value="item-1">
          <AccordionTrigger className="">Xidmətlərimiz</AccordionTrigger>
          <AccordionContent>
            <Link
              href={"/maliyye"}
              className="flex pt-10 gap-1"
              onClick={handleLinkClick}
            >
              <div>
                <DollarSign className="text-green-500" />
              </div>
              <div>Maliyyə modellərinin hazırlanması</div>
            </Link>
            <Link
              href={"/vebsayt"}
              className="flex pt-10 gap-1"
              onClick={handleLinkClick}
            >
              <div>
                <Code className="text-blue-500" />
              </div>

              <div>Vebsaytların Yığılması</div>
            </Link>
            <Link
              href={"/mko"}
              className="flex pt-10 gap-1"
              onClick={handleLinkClick}
            >
              <div>
                <Building2 className="text-green-500" />
              </div>

              <div>Mikro, Kiçik və Orta Bizneslər üçün</div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem className="my-6 border-b " value="item-2">
          <AccordionTrigger>Təlimlərimiz</AccordionTrigger>
          <AccordionContent>
            <Link
              href={"/data-analitika"}
              className="flex pt-10 gap-1"
              onClick={handleLinkClick}
            >
              <div>
                <BarChart className="text-rose-500" />
              </div>
              <div>Data Analitika</div>
            </Link>
            <Link
              href={"/attestasiya"}
              className="flex pt-10 gap-1"
              onClick={handleLinkClick}
            >
              <div>
                <Newspaper className="text-blue-500" />
              </div>

              <div>Bank üzrə attestasiya təlimi</div>
            </Link>
            <Link
              href={"/excel"}
              className="flex pt-10 gap-1"
              onClick={handleLinkClick}
            >
              <div>
                <Code2Icon className="text-rose-500" />
              </div>

              <div>MS Excel Təlimləri</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        {/* <Link
          href={"/loan"}
          className="
            flex
            flex-1
            items-center 
            justify-between
            text-xl
            px-6 
            py-4
            my-6
            border-b
            "
        >
          Kredit Hesablanması
          <div>
            <ArrowRight className="h-6 w-6 " />
          </div>
        </Link> */}

        <Link
          href={"/haqqimizda"}
          className="
            flex
            flex-1
            items-center 
            justify-between
            text-xl
            px-6 
            py-4
            my-6
      
            "
        >
          Haqqımızda
          <div>
            <ArrowRight className="h-6 w-6 " />
          </div>
        </Link>
      </Accordion>

      <div className="md:pt-32">
        <div className="flex items-center justify-center space-x-4">
          {/* <Link href={"/sign-in"}>
                        <Button 
                        className="
                        text-[#4b42ad]
                        text-sm
                        font-light
                        bg-[#eff0ff]
                        p-6 
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300
                        ">
                            Sign in to Bird
                        </Button>
                        </Link> */}

          <Link href={"/contact"}>
            <Button
              className="
                     text-sm
                     font-light
                     rounded-[40px]
                     border-4
                        border-indigo-400/90    
                        py-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        "
            >
              Müraciət Et
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
