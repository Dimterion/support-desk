"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { createTicket } from "@/actions/ticket.actions";

const TicketForm = () => {
  const [state, formAction] = useActionState(createTicket, {
    success: false,
    message: "",
  });

  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      toast.success("Ticket submitted successfully");
      router.push("/tickets");
    }
  }, [state.success, router]);

  return (
    <section className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-md">
      <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
        Submit a Support Ticket
      </h1>

      {state.message && !state.success && (
        <p className="mb-4 text-center text-red-500">{state.message}</p>
      )}

      <form action={formAction} className="space-y-4 text-gray-700">
        <input
          className="w-full rounded border border-gray-200 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="w-full rounded border border-gray-200 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          name="description"
          placeholder="Describe your issue"
          rows={5}
        />
        <select
          className="w-full rounded border border-gray-200 p-3 text-gray-700 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          name="priority"
          defaultValue="Low"
        >
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <button
          className="w-full cursor-pointer rounded bg-blue-600 p-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default TicketForm;
