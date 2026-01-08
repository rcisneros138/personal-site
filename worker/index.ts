/**
 * Password Protection Worker
 * Shows a "Coming Soon" page to visitors, allows access with password
 */

interface Env {
  ASSETS: Fetcher;
  // Set these in Cloudflare Dashboard → Workers → Settings → Variables
  SITE_PASSWORD?: string;
  BYPASS_PROTECTION?: string; // Set to "true" to disable protection
}

const COMING_SOON_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Coming Soon</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Cormorant Garamond', Georgia, serif;
      background: #0D0C0B;
      color: #FAF8F5;
      padding: 2rem;
    }

    .container {
      text-align: center;
      max-width: 500px;
    }

    .accent-line {
      width: 60px;
      height: 2px;
      background: #E5A832;
      margin: 0 auto 2rem;
    }

    h1 {
      font-size: clamp(3rem, 10vw, 5rem);
      font-weight: 300;
      line-height: 1.1;
      margin-bottom: 1.5rem;
    }

    h1 span { color: #E5A832; }

    p {
      font-family: system-ui, sans-serif;
      color: #9B9590;
      font-size: 1.1rem;
      line-height: 1.6;
      margin-bottom: 2rem;
    }

    .password-form {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    input[type="password"] {
      padding: 0.75rem 1rem;
      font-size: 1rem;
      background: #161514;
      border: 1px solid rgba(250, 248, 245, 0.1);
      color: #FAF8F5;
      width: 200px;
      outline: none;
      transition: border-color 0.2s;
    }

    input[type="password"]:focus {
      border-color: #E5A832;
    }

    button {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      background: #FAF8F5;
      color: #0D0C0B;
      border: none;
      cursor: pointer;
      font-weight: 500;
      transition: background 0.2s;
    }

    button:hover {
      background: #E5A832;
    }

    .error {
      color: #E5A832;
      margin-top: 1rem;
      font-family: system-ui, sans-serif;
      font-size: 0.9rem;
    }

    .footer {
      margin-top: 3rem;
      font-family: system-ui, sans-serif;
      font-size: 0.8rem;
      color: #6B6560;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="accent-line"></div>
    <h1>Coming Soon<span>.</span></h1>
    <p>Something new is in the works. Enter the password if you have early access.</p>
    <form class="password-form" method="POST">
      <input type="password" name="password" placeholder="Password" autocomplete="off" />
      <button type="submit">Enter</button>
    </form>
    {{ERROR}}
    <div class="footer">Check back soon</div>
  </div>
</body>
</html>`;

const AUTH_COOKIE_NAME = "site_auth";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    // If protection is bypassed, serve assets directly
    if (env.BYPASS_PROTECTION === "true") {
      return env.ASSETS.fetch(request);
    }

    const url = new URL(request.url);
    const password = env.SITE_PASSWORD || "preview123"; // Default password

    // Check for valid auth cookie
    const cookies = request.headers.get("Cookie") || "";
    const hasValidCookie = cookies.includes(`${AUTH_COOKIE_NAME}=authenticated`);

    if (hasValidCookie) {
      return env.ASSETS.fetch(request);
    }

    // Handle password submission
    if (request.method === "POST") {
      const formData = await request.formData();
      const submittedPassword = formData.get("password");

      if (submittedPassword === password) {
        // Set auth cookie and redirect to requested page
        const response = new Response(null, {
          status: 302,
          headers: {
            Location: url.pathname,
            "Set-Cookie": `${AUTH_COOKIE_NAME}=authenticated; Path=/; Max-Age=${COOKIE_MAX_AGE}; HttpOnly; Secure; SameSite=Strict`,
          },
        });
        return response;
      } else {
        // Wrong password - show error
        const html = COMING_SOON_HTML.replace(
          "{{ERROR}}",
          '<p class="error">Incorrect password</p>'
        );
        return new Response(html, {
          status: 401,
          headers: { "Content-Type": "text/html" },
        });
      }
    }

    // Show coming soon page
    const html = COMING_SOON_HTML.replace("{{ERROR}}", "");
    return new Response(html, {
      status: 200,
      headers: { "Content-Type": "text/html" },
    });
  },
};
