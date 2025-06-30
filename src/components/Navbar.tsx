import Link from "next/link";

import { getCurrentUser } from "@/lib/current-user";
import LogoutBtn from "@/components/LogoutBtn";

const Navbar = async () => {
  const user = await getCurrentUser();

  return (
    <nav className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
      <section>
        <Link href="/" className="text-sm font-bold text-blue-600 sm:text-xl">
          Support Desk
        </Link>
      </section>
      <section className="flex items-center space-x-4">
        {user ? (
          <>
            <Link
              href="/tickets/new"
              className="text-sm text-gray-700 transition hover:underline sm:text-base"
            >
              New Ticket
            </Link>
            <Link
              href="/tickets"
              className="text-sm text-gray-700 transition hover:underline sm:text-base"
            >
              My Tickets
            </Link>
            <LogoutBtn />
          </>
        ) : (
          <>
            <Link
              href="/login"
              className="text-sm text-blue-600 transition hover:underline sm:text-base"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="rounded bg-blue-600 px-2 py-2 text-sm text-white transition hover:bg-blue-700 sm:px-4 sm:text-base"
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
