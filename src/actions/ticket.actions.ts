"use server";

import * as Sentry from "@sentry/nextjs";

export const createTicket = async (
  prevState: { success: boolean; message: string },
  formData: FormData,
): Promise<{ success: boolean; message: string }> => {
  try {
    const subject = formData.get("subject") as string;
    const description = formData.get("description") as string;
    const priority = formData.get("priority") as string;

    if (!subject || !description || !priority) {
      Sentry.captureMessage(
        "Validation Error: Missing ticket fields",
        "warning",
      );

      return { success: false, message: "All fields are required" };
    }

    return { success: true, message: "Ticket created successfully" };
  } catch (error) {
    Sentry.captureException(error as Error, {
      extra: { formData: Object.fromEntries(formData.entries()) },
    });

    return {
      success: false,
      message: "An error occurred while creating the ticket",
    };
  }
};
