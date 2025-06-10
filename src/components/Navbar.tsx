import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <div>
        <Link href="/" className="text-xl font-bold text-blue-600">
          Support Desk
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
