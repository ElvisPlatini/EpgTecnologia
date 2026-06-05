export interface Env {
  ENVIRONMENT: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "cloudflare-worker",
        environment: env.ENVIRONMENT
      });
    }

    return new Response("EPG Tecnologia Worker", {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }
};

