const CloseTicketBtn = () => {
  return (
    <form>
      <input type="hidden" name="ticketId" />
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
