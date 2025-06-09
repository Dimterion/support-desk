import { getTicketById } from "@/actions/ticket.actions";
import { logEvent } from "@/utils/sentry";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPriorityClass } from "@/utils/ui";

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
      </div>
    </main>
  );
};

export default TicketDetailsPage;
