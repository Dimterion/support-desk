"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginUser } from "@/actions/auth.actions";

const LoginForm = () => {
  const router = useRouter();

  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(loginUser, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("Login successful!");
      router.push("/tickets");
    } else if (state.message) {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <section className="flex min-h-screen items-center justify-center bg-blue-50 px-4">
      <div className="w-full max-w-md rounded-lg border border-gray-200 bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-3xl font-bold text-blue-600">
          Login
        </h1>

        <form action={formAction} className="space-y-4 text-gray-700">
          <input
            className="w-full rounded border border-gray-200 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="email"
            name="email"
            placeholder="Your Email"
            autoComplete="email"
            required
          />
          <input
            className="w-full rounded border border-gray-200 p-3 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="new-password"
            required
          />
          <button
            className="w-full rounded bg-blue-600 p-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
