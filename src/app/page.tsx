import Link from "next/link";
import { FaTicketAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <FaTicketAlt className="mx-auto mb-4 text-red-600" size={50} />
      <h1 className="mb-4 text-4xl font-bold text-blue-600 md:text-5xl">
        Welcome to Support Desk
      </h1>
      <p className="mb-8 text-lg text-gray-600">
        Support ticket management system.
      </p>
      <section className="animate-slide flex flex-col justify-center gap-4 opacity-0 md:flex-row">
        <Link
          href="/tickets/new"
          className="rounded bg-blue-600 px-6 py-3 text-white shadow transition hover:bg-blue-700"
        >
          Submit a Ticket
        </Link>
        <Link
          href="/tickets"
          className="rounded bg-blue-100 px-6 py-3 text-gray-700 shadow transition hover:bg-blue-200"
        >
          View Tickets
        </Link>
      </section>
    </main>
  );
};

export default HomePage;
