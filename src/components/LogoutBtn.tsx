"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "@/actions/auth.actions";
import { toast } from "sonner";

const LogoutBtn = () => {
  const router = useRouter();

  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(logoutUser, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("Logout successful");
      router.push("/login");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={formAction}>
      <button
        type="submit"
        className="rounded bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
      >
        Logout
      </button>
    </form>
  );
};

export default LogoutBtn;
