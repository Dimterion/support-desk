import Link from "next/link";
import { getTickets } from "@/actions/ticket.actions";
import { logEvent } from "@/utils/sentry";

const TicketsPage = async () => {
  const tickets = await getTickets();

  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600">
        Support Tickets
      </h1>
    </main>
  );
};

export default TicketsPage;
