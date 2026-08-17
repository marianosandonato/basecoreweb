type TurnstileVerifyResponse = {
  success: boolean;
};

/**
 * Verifies a Cloudflare Turnstile token server-side. Returns true (fails
 * open) when TURNSTILE_SECRET_KEY isn't configured, so the forms keep
 * working before the captcha is set up in Vercel's env vars.
 */
export async function verifyTurnstile(
  token: string | undefined,
  remoteIp: string | null,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (remoteIp) body.set("remoteip", remoteIp);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body,
  });
  if (!res.ok) return false;

  const data: TurnstileVerifyResponse = await res.json();
  return data.success === true;
}
