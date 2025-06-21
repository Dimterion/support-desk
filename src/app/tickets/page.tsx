import { getTickets } from "@/actions/ticket.actions";
import { getCurrentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";
import TicketItem from "@/components/TicketItem";

const TicketsPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  const tickets = await getTickets();

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
            <TicketItem key={ticket.id} ticket={ticket} />
          ))}
        </div>
      )}
    </main>
  );
};

export default TicketsPage;
