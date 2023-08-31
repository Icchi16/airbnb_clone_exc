import clsx from "clsx";
import Link from "next/link";

interface CategoryLinkProps {
  className?: string;
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ className }) => {
  return (
    <div className={clsx(className, "")}>
      <Link href="#" className="text-sm">
        <p className="font-semibold">Canmore</p>
        <p className="font-light">Vacation rentals</p>
      </Link>
    </div>
  );
};

export default CategoryLink;
