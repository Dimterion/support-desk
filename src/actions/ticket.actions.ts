"use server";

import * as Sentry from "@sentry/nextjs";

export const createTicket = async (
  prevState: { success: boolean; message: string },
  formData: FormData,
): Promise<{ success: boolean; message: string }> => {
  const subject = formData.get("subject") as string;
  const description = formData.get("description") as string;
  const priority = formData.get("priority") as string;

  if (!subject || !description || !priority) {
    Sentry.captureMessage("Validation Error: Missing ticket fields  ");

    return {
      success: false,
      message: "All fields are required",
    };
  }

  return { success: true, message: "Ticket created successfully" };
};
