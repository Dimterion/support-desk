import { getTicketById } from "@/actions/ticket.actions";
import { logEvent } from "@/utils/sentry";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPriorityClass } from "@/utils/ui";

const TicketDetailsPage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;

  return <main>Ticket Details {id}</main>;
};

export default TicketDetailsPage;
