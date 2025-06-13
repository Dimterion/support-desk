import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { logEvent } from "@/utils/sentry";

// Encrypt and sign token
const secret = new TextEncoder().encode(process.env.AUTH_SECRET);
const cookieName = "auth-token";

export async function signAuthToken(payload: any) {
  try {
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d")
      .sign(secret);

    return token;
  } catch (error) {
    logEvent("Token signing failed", "auth", { payload }, "error", error);

    throw new Error("Token signing failed");
  }
}

// Decrypt and verify token
export async function verifyAuthToken<T>(token: string): Promise<T> {
  try {
    const { payload } = await jwtVerify(token, secret);

    return payload as T;
  } catch (error) {
    logEvent(
      "Token decryption failed",
      "auth",
      { tokenSnippet: token.slice(0, 10) },
      "error",
      error,
    );

    throw new Error("Token decryption failed");
  }
}
