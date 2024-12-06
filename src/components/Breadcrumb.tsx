import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string; // Make href optional to handle non-clickable items
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-10">
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          {item.href ? (
            <Link
              href={item.href}
              className="text-[#121820] hover:text-abricot transition duration-300 relative after:absolute after:ml-4 after:w-2 after:h-2 after:bg-abricot after:content-[''] after:rounded-full after:top-1/2 after:-translate-y-1/2"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#12182080]">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumb;
