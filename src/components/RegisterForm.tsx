"use client";

import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { registerUser } from "@/actions/auth.actions";

const RegisterForm = () => {
  const initialState = {
    success: false,
    message: "",
  };

  const [state, formAction] = useActionState(registerUser, initialState);

  return <div>RegisterForm</div>;
};

export default RegisterForm;
