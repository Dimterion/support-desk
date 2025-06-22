"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { closeTicket } from "@/actions/ticket.actions";

const CloseTicketBtn = ({
  ticketId,
  isClosed,
}: {
  ticketId: number;
  isClosed: boolean;
}) => {
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(closeTicket, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success(state.message);
    } else if (state.message && !state.success) {
      toast.error(state.message);
    }
  }, [state]);

  if (isClosed) return null;

  return (
    <form action={formAction}>
      <input type="hidden" name="ticketId" value={ticketId} />
      <button
        type="submit"
        className="w-full rounded bg-red-500 px-3 py-3 text-white transition hover:bg-red-600"
      >
        Close Ticket
      </button>
    </form>
  );
};

export default CloseTicketBtn;
