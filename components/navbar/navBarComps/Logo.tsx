import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div
      className={clsx(className, "md:!min-w-[102px] md:items-center md:!flex")}
    >
      <Link href="">
        <div className="overflow-hidden md:w-9 lg:w-min">
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
    </div>
  );
};

export default Logo;
