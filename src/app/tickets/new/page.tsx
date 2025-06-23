import { redirect } from "next/navigation";
import TicketForm from "@/components/TicketForm";
import { getCurrentUser } from "@/lib/current-user";

const NewTicketPage = async () => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-blue-50 px-4">
      <TicketForm />
    </main>
  );
};

export default NewTicketPage;
