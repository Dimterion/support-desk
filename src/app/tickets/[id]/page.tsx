import Link from "next/link";
import { notFound } from "next/navigation";

import { getTicketById } from "@/actions/ticket.actions";
import { logEvent } from "@/utils/sentry";
import { getPriorityClass } from "@/utils/ui";
import CloseTicketBtn from "@/components/CloseTicketBtn";

const TicketDetailsPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;
  const ticket = await getTicketById(id);

  if (!ticket) {
    notFound();
  }

  logEvent("Viewing ticket details", "ticket", { ticketId: ticket.id }, "info");

  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <div className="mx-auto max-w-2xl space-y-6 rounded-lg border border-gray-200 bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-blue-600">{ticket.subject}</h1>

        <section className="text-gray-700">
          <h2 className="mb-2 text-lg font-semibold">Description</h2>
          <p>{ticket.description}</p>
        </section>

        <section className="text-gray-700">
          <h2 className="mb-2 text-lg font-semibold">Priority</h2>
          <p className={getPriorityClass(ticket.priority)}>{ticket.priority}</p>
        </section>

        <section className="text-gray-700">
          <h2 className="mb-2 text-lg font-semibold">Created At</h2>
          <p>{new Date(ticket.createdAt).toLocaleString()}</p>
        </section>

        <Link
          href="/tickets"
          className="inline-block rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 text-sm sm:text-base"
        >
          ← Back to Tickets
        </Link>

        {ticket.status !== "Closed" && (
          <CloseTicketBtn
            ticketId={ticket.id}
            isClosed={ticket.status === "Closed"}
          />
        )}
      </div>
    </main>
  );
};

export default TicketDetailsPage;
