type TurnstileVerifyResponse = {
  success: boolean;
};

/**
 * Verifies a Cloudflare Turnstile token server-side. Fails open (returns
 * true) both when TURNSTILE_SECRET_KEY isn't configured, and when no token
 * was sent at all — the widget can be legitimately unable to produce one
 * (iOS Safari with iCloud Private Relay / "Prevent Cross-Site Tracking"
 * makes the managed challenge hang forever, a documented Cloudflare/Safari
 * conflict, not something the client can route around) and the client-side
 * "stuck" fallback (Turnstile.tsx's onStuck) already unblocks the form in
 * that case. The honeypot field is the anti-spam net for that path — a
 * token that *is* sent must still verify successfully below.
 */
export async function verifyTurnstile(
  token: string | undefined,
  remoteIp: string | null,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return true;

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
