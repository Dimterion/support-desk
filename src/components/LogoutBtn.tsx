"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";

import { logoutUser } from "@/actions/auth.actions";

const LogoutBtn = () => {
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(logoutUser, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("Logout successful");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="cursor-pointer rounded bg-red-500 px-2 py-2 text-sm text-white transition hover:bg-red-600 sm:px-4 sm:text-base"
      >
        Logout
      </button>
    </form>
  );
};

export default LogoutBtn;
