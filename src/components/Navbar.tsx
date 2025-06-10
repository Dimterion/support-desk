import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <section>
        <Link href="/" className="text-xl font-bold text-blue-600">
          Support Desk
        </Link>
      </section>
      <section className="flex items-center space-x-4">
        <Link
          href="/tickets/new"
          className="text-gray-700 transition hover:underline"
        >
          New Ticket
        </Link>
        <Link
          href="/tickets"
          className="text-gray-700 transition hover:underline"
        >
          My Tickets
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
