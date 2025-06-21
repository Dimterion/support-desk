import Link from "next/link";
import { getPriorityClass } from "@/utils/ui";
import type { Ticket } from "@/generated/prisma";

type TicketItemProps = {
  ticket: Ticket;
};

const TicketItem = ({ ticket }: TicketItemProps) => {
  const isClosed = ticket.status === "Closed";

  return (
    <section
      key={ticket.id}
      className={`flex items-center justify-between rounded-lg border border-gray-200 bg-white p-6 shadow ${
        isClosed ? "opacity-50" : ""
      }`}
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
          className={`mt-2 inline-block rounded px-3 py-1 text-center text-sm transition ${
            isClosed
              ? "pointer-events-none cursor-not-allowed bg-gray-400 text-gray-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          View Ticket
        </Link>
      </article>
    </section>
  );
};

export default TicketItem;
