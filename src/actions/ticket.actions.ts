"use server";

export const createTicket = async (formData: FormData) => {
  const subject = formData.get("subject") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;

  console.log(subject, description, priority);

  return { success: true, message: "Ticket created successfully" };
};
