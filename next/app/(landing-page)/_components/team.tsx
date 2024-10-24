// components/ProfileCard.tsx
import { FC, useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

interface ProfileCardProps {
  imageSrc: string;
  name: string;
  title: string;
}

const ProfileCard: FC<ProfileCardProps> = ({ imageSrc, name, title }) => {
  // Ensuring the component renders consistently by using useState and useEffect to control when it renders
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative w-72 h-96 bg-gray-200 m-5 rounded-lg overflow-hidden shadow-lg flex justify-center items-center backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:transform hover:-translate-y-8">
      <div className="relative flex flex-col justify-center items-center transition-all duration-300 cursor-pointer">
        <div className="relative w-40 h-42 overflow-hidden rounded-full">
          <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" className="rounded-full transition-all duration-500 hover:rounded-full" />
        </div>
        <div className="text-center mt-5">
          <h3 className="text-gray-800 uppercase tracking-wider font-medium text-lg">
            {name}<br />
            <span className="text-xs font-light normal-case">{title}</span>
          </h3>
        </div>
      </div>
      <ul className="absolute bottom-12 flex opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <li key="linkedin" className="mx-2 transition-transform duration-500 transform translate-y-10 group-hover:translate-y-0">
          <a href="https://linkedin.com"><SocialIcon url="https://linkedin.com" /></a>
        </li>
        <li key="instagram" className="mx-2 transition-transform duration-500 transform translate-y-10 group-hover:translate-y-0">
          <a href="https://instagram.com"><SocialIcon url="https://instagram.com" /></a>
        </li>
        <li key="facebook" className="mx-2 transition-transform duration-500 transform translate-y-10 group-hover:translate-y-0">
          <a href="https://facebook.com"><SocialIcon url="https://facebook.com" /></a>
        </li>
      </ul>
    </div>
  );
};

const TeamSection: FC = () => {
  return (
    <section className="relative z-10 flex justify-center items-center flex-wrap my-10 mb-28 bg-gray-100 h-screen">
      <ProfileCard imageSrc="/images /arzu.jpg" name="Arzu Bayramov" title="CEO" />
      <ProfileCard imageSrc="/path/to/ali.jpg" name="Ali" title="Developer" />
      <ProfileCard imageSrc="/path/to/elnur.jpg" name="Elnur Novruzov" title="Telimci" />
    </section>
  );
};

export default TeamSection;
