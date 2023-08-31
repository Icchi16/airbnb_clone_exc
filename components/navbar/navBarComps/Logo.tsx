import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link
      href=""
      className={clsx(className, "md:!min-w-[102px] items-center md:!flex")}
    >
      <div className="overflow-hidden md:w-9 lg:w-full">
        <div className="min-w-[102px]">
          <Image
            src="/images/airbnb_logo.svg"
            alt="AirBnB"
            width={102}
            height={40}
          />
        </div>
      </div>
    </Link>
  );
};

export default Logo;
