import Link from "next/link";

import { getCurrentUser } from "@/lib/current-user";
import LogoutBtn from "@/components/LogoutBtn";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <section>
        <Link href="/" className="text-xl font-bold text-blue-600">
          Support Desk
        </Link>
      </section>
      <section className="flex items-center space-x-4">
        {user ? (
          <>
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
            <LogoutBtn />
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-blue-600 transition hover:underline"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Register
            </Link>
          </>
        )}
      </section>
    </nav>
  );
};

export default Navbar;
