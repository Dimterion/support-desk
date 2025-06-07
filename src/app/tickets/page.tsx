import Link from "next/link";
import { getTickets } from "@/actions/ticket.actions";
// import { logEvent } from "@/utils/sentry";

const TicketsPage = async () => {
  const tickets = await getTickets();

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 font-bold";
      case "Medium":
        return "text-yellow-600 font-bold";
      case "Low":
        return "text-green-600 font-bold";
    }
  };

  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-600">
        Support Tickets
      </h1>
      {tickets.length === 0 ? (
        <p className="text-center text-gray-600">No tickets yet</p>
      ) : (
        <div className="mx-auto max-w-3xl space-y-4">
          {tickets.map((ticket) => (
            <section
              key={ticket.id}
              className="flex items-center justify-between rounded-lg border-gray-200 bg-white p-6 shadow"
            >
              {/* Left side */}
              <article>
                <h2 className="text-xl font-semibold text-blue-600">
                  {ticket.subject}
                </h2>
              </article>
              {/* Right side */}
              <article className="space-y-2 text-right">
                <h3 className="text-sm text-gray-500">
                  Priority:{" "}
                  <span className={getPriorityClass(ticket.priority)}>
                    {ticket.priority}
                  </span>
                </h3>
                <Link
                  href={`/tickets/${ticket.id}`}
                  className="mt-2 inline-block rounded bg-blue-600 px-3 py-1 text-center text-sm text-white transition hover:bg-blue-700"
                >
                  View Ticket
                </Link>
              </article>
            </section>
          ))}
        </div>
      )}
    </main>
  );
};

export default TicketsPage;
