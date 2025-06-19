"use server";

import { prisma } from "@/db/prisma";
import bcrypt from "bcryptjs";
import { logEvent } from "@/utils/sentry";
import { signAuthToken, setAuthToken, removeAuthToken } from "@/lib/auth";

type ResponseResult = {
  success: boolean;
  message: string;
};

// Register new user
export async function registerUser(
  prevState: ResponseResult,
  formData: FormData,
): Promise<ResponseResult> {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
      logEvent(
        "Validation error: Missing register fields",
        "auth",
        { name, email },
        "warning",
      );

      return { success: false, message: "All fields are required" };
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      logEvent(
        `Registration failed: User already exists - ${email}`,
        "auth",
        { email },
        "warning",
      );

      return { success: false, message: "User already exists" };
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    // Sign in set auth token
    const token = await signAuthToken({ userId: user.id });

    await setAuthToken(token);

    logEvent(
      `User registered successfully: ${email}`,
      "auth",
      { userId: user.id, email },
      "info",
    );

    return { success: true, message: "Registration successful" };
  } catch (error) {
    logEvent(
      "Unexpected error during registration",
      "auth",
      {},
      "error",
      error,
    );

    return {
      success: false,
      message: "Something went wrong, please try again",
    };
  }
}

// Log user out and remove auth cookies
export async function logoutUser(): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    await removeAuthToken();

    logEvent("User logged out successfully", "auth", {}, "info");

    return { success: true, message: "Logout successful" };
  } catch (error) {
    logEvent("Unexpected error during logout", "auth", {}, "error", error);

    return { success: false, message: "Logout failed. Please try again" };
  }
}

// Log user in
export async function loginUser(
  prevState: ResponseResult,
  formData: FormData,
): Promise<ResponseResult> {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!email || !password) {
      logEvent(
        "Validaation error: Missing login fields",
        "auth",
        { email },
        "warning",
      );

      return { success: false, message: "Email and password are required" };
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      logEvent(
        `Login failed: User not found - ${email}`,
        "auth",
        { email },
        "warning",
      );

      return { success: false, message: "Invalid email or password" };
    }
  } catch (error) {}
}
