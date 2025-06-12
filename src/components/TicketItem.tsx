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
      TicketItem
    </section>
  );
};

export default TicketItem;
